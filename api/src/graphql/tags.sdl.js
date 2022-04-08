export const schema = gql`
  type Tag {
    id: String!
    name: String!
    taggedImageIDs: String!
  }

  type Query {
    UserTags(userID: String!): Tag! @requireAuth
    TagByName(userID: String!, name: String!): Tag! @requireAuth
    TagByTagID(userID: String!, tagID: String!): Tag! @requireAuth
    TagByImageID(userID: String!, imageID: String!): Tag! @requireAuth
  }
  type mutation {
    UserCreateTag(userID: String!, imageID: String!): Tag! @requireAuth
    DeleteTag(userID: String!, imageID: String!, tagID: String!): Tag!
      @requireAuth
  }
`
