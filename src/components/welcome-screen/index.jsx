import "./welcome.css";
import camera from "../../assets/images/camera.svg";

const WelcomeScreen = () => {
  return (
  <div className="sg-main-wrapper d-flex flex-column align-items-center flex-1 p-4">
      <div className="sg-main-section d-flex flex-column align-items-center flex-1 px-3">
        <h4 className="site-heading fw-bold mb-3">Logo</h4>
        <div className="sg-welcome-section d-flex flex-column flex-1 p-3">
          <div className="d-flex flex-column flex-1 align-items-center justify-content-center">
            <h6 className="fw-semibold">Welcome To Selfi Generator</h6>
            <p className="text-center">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum, consequuntur!</p>
          </div>
          <div className="upload-section d-flex flex-column align-items-center justify-content-center">
            <p className="mb-1">Take Photo</p>
            <div className="icon-box rounded-circle border d-flex align-items-center justify-content-center overflow-hidden">
              <img src={camera} alt="camera" />
            </div>
          </div>
        </div>
      </div>
    </div>
    )
}

export default WelcomeScreen;