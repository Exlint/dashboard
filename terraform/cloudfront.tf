module "cdn" {
  source                        = "terraform-aws-modules/cloudfront/aws"
  comment                       = "CloudFront for caching S3 private and static website"
  is_ipv6_enabled               = true
  price_class                   = "PriceClass_100"
  create_origin_access_identity = true
  aliases                       = [var.frontend_domain_name]

  origin_access_identities = {
    s3_identity = "S3 dedicated for hosting the frontend"
  }

  origin = {
    s3_identity = {
      domain_name = module.s3_bucket.s3_bucket_bucket_regional_domain_name
      s3_origin_config = {
        origin_access_identity = "s3_identity"
      }
    }
  }

  default_cache_behavior = {
    target_origin_id       = "s3_identity"
    viewer_protocol_policy = "redirect-to-https"
    default_ttl            = 5400
    min_ttl                = 3600
    max_ttl                = 7200
    allowed_methods        = ["GET", "HEAD"]
    cached_methods         = ["GET", "HEAD"]
    compress               = true
    query_string           = true
  }

  default_root_object = "index.html"

  custom_error_response = {
    error403 = {
      error_code         = 403
      response_code      = 404
      response_page_path = "/index.html"
    }
    error404 = {
      error_code         = 404
      response_code      = 404
      response_page_path = "/index.html"
    }
  }

  tags = merge(
    var.tags,
    {
      Name  = "${var.project}-cloudfront",
      Stack = "frontend"
    }
  )
}
