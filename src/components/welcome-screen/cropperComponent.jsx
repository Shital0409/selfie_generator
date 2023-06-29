import ImageComponent from "./imageComponent";
import "./cropper.css";


const CropperComponent = () => {
  return (
    <div className="sg-main-wrapper d-flex flex-column align-items-center flex-1">
      <div className="sg-main-section d-flex flex-column align-items-center flex-1 px-3">
        <div className="p-3">
          <h4 className="site-heading fw-bold mb-3">PlayBill</h4>
        </div>
        <div className="sg-content-body d-flex flex-1 w-100">
          <div className="image-section d-flex flex-1 w-100 position-relative">
            <ImageComponent/>
          </div>
        </div>
        <div className="p-4">
          <h4>Filter Section</h4>
        </div>
      </div>
    </div>
  )
}

export default CropperComponent;