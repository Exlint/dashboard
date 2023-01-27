module "cdn" {
  source  = "terraform-aws-modules/cloudfront/aws"
  version = "3.1.0"

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

  viewer_certificate = {
    acm_certificate_arn = module.acm_cloudfront.acm_certificate_arn
    ssl_support_method  = "sni-only"
  }

  tags = merge(
    var.common_tags,
    {
      Name  = "${var.project}-Cloudfront",
      Stack = "frontend"
    }
  )
}
