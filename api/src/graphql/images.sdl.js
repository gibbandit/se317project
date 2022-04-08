export const schema = gql`
  type Image {
    id: String!
    downloadURL: String!
    tagIDs: [String]
  }

  type UploadImage {
    id: String!
    uploadURL: String!
  }

  type Query {
    UserImages(userID: String!): [Image!]! @skipAuth
    Image(userID: String!, imageID: String!): Image! @skipAuth
  }
  type mutation {
    UploadImage(userID: String!): UploadImage! @skipAuth
    DeleteImage(userID: String!, imageID: String!): Image! @skipAuth
  }
`
