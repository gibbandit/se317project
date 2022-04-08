import { GetObjectCommand } from '@aws-sdk/client-s3'
import { s3Client } from './s3Client'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

export const getSignedDownloadUrl = async (createdUserID, imageID) => {
  const params = {
    Bucket: process.env.AWS_BUCKET,
    key: createdUserID + '/' + imageID + '.jpg',
  }
  const command = new GetObjectCommand(params)
  const signedUrl = await getSignedUrl(s3Client, command, { expiresIn: 3600 })
  return signedUrl
}
