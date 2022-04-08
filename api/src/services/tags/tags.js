import { db } from 'src/lib/db'

export const UserTags = ({ userID }) => {
  return db.Tag.findMany({ where: { createdUserID: userID } })
}
export const TagByName = ({ userID, name }) => {
  return db.Tag.findUnique({ where: { createdUserID: userID, name: name } })
}
export const TagByTagID = ({ userID, tagID }) => {
  return db.Tag.findUnique({ where: { createdUserID: userID, id: tagID } })
}
export const TagByImageID = ({ userID, imageID }) => {
  return db.Tag.findMany({
    where: { createdUserID: userID, TaggedImageIds: imageID },
  })
}
export const UserCreateTag = ({ userID, imageID }) => {}
export const DeleteTag = ({ userID, imageID, tagID }) => {}
