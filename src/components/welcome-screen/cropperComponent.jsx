import ImageComponent from "./imageComponent";
import "./cropper.css";
import site from "../../assets/images/profile.png";

const CropperComponent = () => {
  return (
    <div className="sg-main-wrapper d-flex flex-column align-items-center flex-1">
      <div className="sg-main-section d-flex flex-column align-items-center flex-1 px-3">
        <div className="p-3">
          <h4 className="site-heading fw-bold mb-3">PlayBill</h4>
        </div>
        <div className="sg-content-body">
          <div className="image-section">
            <ImageComponent  imageSrc={site} text="helllo"/>
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