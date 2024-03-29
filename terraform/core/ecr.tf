resource "aws_ecr_repository" "backend" {
  name                 = var.backend_repository
  image_tag_mutability = "MUTABLE"
  force_delete         = true

  encryption_configuration {
    encryption_type = "KMS"
  }

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = merge(
    var.common_tags,
    {
      Stack = "backend"
      Name  = "${var.project}-ecr-backend",
    }
  )
}

resource "aws_ecr_repository" "cli-backend" {
  name                 = var.cli_backend_repository
  image_tag_mutability = "MUTABLE"
  force_delete         = true

  encryption_configuration {
    encryption_type = "KMS"
  }

  image_scanning_configuration {
    scan_on_push = true
  }

  tags = merge(
    var.common_tags,
    {
      Stack = "backend"
      Name  = "${var.project}-ecr-cli-backend",
    }
  )
}
