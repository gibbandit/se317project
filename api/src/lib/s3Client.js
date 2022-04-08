import { S3Client } from '@aws-sdk/client-s3'

const region = process.env.AWS_REGION

export const s3Client = new S3Client({ region: region })
