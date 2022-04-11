import ImageS3 from 'src/components/ImageS3'

export const QUERY = gql`
  query FindUserImagesQuery($userID: String!) {
    UserImages: UserImages(userID: $userID) {
      id
      downloadURL
      tagIDs
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>no images yet</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ images }) => {
  return (
    <ul>
      {images.map((item) => {
        return (
          <ImageS3
            key={item.id}
            imageID={item.id}
            downloadURL={item.downloadURL}
          />
        )
      })}
    </ul>
  )
}
