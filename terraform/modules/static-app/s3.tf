module "s3_bucket" {
  source  = "terraform-aws-modules/s3-bucket/aws"
  version = "3.15.2"

  bucket        = var.s3_bucket_name
  acl           = "private"
  force_destroy = true

  tags = merge(var.common_tags, var.s3_bucket_tags)
}

data "aws_iam_policy_document" "s3_policy" {
  version = "2012-10-17"

  statement {
    actions   = ["s3:GetObject"]
    resources = ["${module.s3_bucket.s3_bucket_arn}/*"]

    principals {
      type        = "AWS"
      identifiers = module.cdn.cloudfront_origin_access_identity_iam_arns
    }
  }
}

resource "aws_s3_bucket_policy" "s3_cloudfront_link" {
  bucket = module.s3_bucket.s3_bucket_id
  policy = data.aws_iam_policy_document.s3_policy.json
}
