import { useCallback, useState, useRef } from "react";
import Cropper from 'react-easy-crop'
import html2canvas from 'html2canvas';
import "./imageComponent.css";
import site from "../../assets/images/profile.png";

const ImageComponent = ({ imageSrc, text }) => {
  
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const cropContainerRef = useRef(null);
    const imageRef = useRef(null);

  const handleCropChange = (crop) => {
    setCrop(crop);
  };

  const handleZoomChange = (zoom) => {
    setZoom(zoom);
  };
 
  const handleDownload = () => {
    const cropContainer = cropContainerRef.current;
    const imageElement = imageRef.current;
    console.log(imageElement)
    html2canvas(cropContainer).then((canvas) => {
      const dataUrl = canvas.toDataURL(); // Base64 representation of the cropped image
      const link = document.createElement('a');
      link.href = dataUrl;
      console.log(link)
      link.download = 'magazine_crop.png';
      link.click();
    });
  };


  return (
    <div className="">
      <div ref={cropContainerRef}>
        {/* Replace with your image and text */}
        <img src={imageSrc} alt="Magazine" ref={imageRef} />
        <p>{text}</p>
      </div>
  <div className="crop-container" >
    <Cropper
        image={imageSrc}
        crop={crop}
        zoom={zoom}
        aspect={1}
        onCropChange={handleCropChange}
        maxZoom={3}
        // onCropComplete={onCropComplete}
        // showGrid={false}
        // objectFit="cover"
          onZoomChange={handleZoomChange}
        // transform="none"
      // eslint-disable-next-line no-sequences
      // cropSize={{width: crop.x, height: crop.y}}
        // onMediaLoaded={(mediaSize) => {
        // // Adapt zoom based on media size to fit max height
        //   setZoom(CONTAINER_HEIGHT / mediaSize.naturalHeight)
        // }}
    />
  </div>
      {/* {croppedImage && (
        <div>
          <img src={croppedImage} alt="Cropped Image" />
          <p>{textContent}</p>
          <button onClick={handleDownload}>Download Cropped Image</button>
        </div>
      )} */}
      <button onClick={handleDownload}>Download Cropped Image</button>
      </div>
  )
}

export default ImageComponent;