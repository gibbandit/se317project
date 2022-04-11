const ImageS3 = ({ imageID, downloadURL, _tagIDs, _onClick }) => {
  return (
    <div>
      <img src={downloadURL} alt={imageID} />
    </div>
  )
}

export default ImageS3
