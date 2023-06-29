import { useCallback, useState } from "react";
import Cropper from 'react-easy-crop'
import "./imageComponent.css";
import site from "../../assets/images/profile.png";

const ImageComponent = () => {
  
const CONTAINER_HEIGHT = 300
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    console.log(croppedArea, croppedAreaPixels);
  }, [])

  return (
  <div className="crop-container">
    <Cropper
        image={site}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={setCrop}
        maxZoom={3}
        onCropComplete={onCropComplete}
        // showGrid={false}
        // objectFit="cover"
        onZoomChange={setZoom}
        // transform="none"
      // eslint-disable-next-line no-sequences
      // cropSize={{width: crop.x, height: crop.y}}
        // onMediaLoaded={(mediaSize) => {
        // // Adapt zoom based on media size to fit max height
        //   setZoom(CONTAINER_HEIGHT / mediaSize.naturalHeight)
        // }}
        />
        </div>
  )
}

export default ImageComponent;