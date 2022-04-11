const UploadImage = () => {
  const [uploadingImage, setUploadingImage] = React.useState(false)
  const [expandUploadImage, setExpandUploadImage] = React.useState(false)
  return uploadingImage ? (
    <>
      <div></div>
    </>
  ) : (
    <>
      <div className="">
        <div>
          <button onClick={() => setExpandUploadImage(!expandUploadImage)}>
            + upload
          </button>
        </div>
        <div>
          {expandUploadImage && <input type="file" accept="image/jpeg" />}
        </div>
      </div>
    </>
  )
}

export default UploadImage
