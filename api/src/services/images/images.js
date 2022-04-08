import { db } from 'src/lib/db'
import { getSignedDownloadUrl } from 'src/lib/s3Download'
import { getSignedUploadUrl } from 'src/lib/s3Upload'
export const UserImages = async ({ userID }) => {
  const images = await db.Image.findMany({ where: { createdUserId: userID } })
  return images.map((image) => {
    return {
      downloadURL: getSignedDownloadUrl(image.createdUserId, image.id),
      ...image,
    }
  })
}

export const Image = async ({ userID, ImageID }) => {
  const uniqueImage = await db.Image.findUnique({
    where: { id: ImageID, createdUser: userID },
  })
  return {
    downloadURL: getSignedDownloadUrl(
      uniqueImage.createdUserId,
      uniqueImage.id
    ),
    ...uniqueImage,
  }
}

export const UploadImage = async ({ userID }) => {
  const createdImage = await db.Image.create({
    data: {
      createdUser: {
        connect: { id: userID },
      },
    },
  })
  return {
    uploadURL: getSignedUploadUrl(createdImage.createdUserId, createdImage.id),
    ...createdImage,
  }
}

export const DeleteImage = ({ userID, ImageID }) => {
  return db.Image.delete({
    where: { id: ImageID, createdUser: userID },
  })
}
