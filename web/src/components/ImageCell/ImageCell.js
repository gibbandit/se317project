export const QUERY = gql`
  query FindImageQuery($userID: String!, $imageID: String!) {
    Image: Image(userID: $userID, imageID: $imageID) {
      id
      downloadURL
      tagIDs
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ image }) => {
  return <div>{JSON.stringify(image)}</div>
}
