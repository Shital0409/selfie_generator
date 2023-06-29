import logo from "./logo.svg";
import img1 from "./img1.png";
import img2 from "./img2.JPG";
import "./App.css";

function App() {
  const API_KEY = "YOUR_API_KEY";

  // function saveImage(data) {
  //   console.log("data", data);
  //   // Select the temporary element we have created for
  //   // helping to save the image
  //   let linkElement = document.getElementById("link");
  //   linkElement.setAttribute("download", data);

  //   // Convert the canvas data to a image data URL
  //   // let canvasData = canvas.toDataURL("image/png");

  //   // Replace it with a stream so that
  //   // it starts downloading
  //   // canvasData.replace("image/png", "image/octet-stream");

  //   // Set the location href to the canvas data
  //   linkElement.setAttribute("href", data);

  //   // Click on the link to start the download
  //   linkElement.click();
  // }
  let abc = logo;
  async function removeBackground(e) {
    let imageFile = e.target.files[0];
    const formData = new FormData();
    formData.append("image_file", imageFile);
    try {
      const response = await fetch(`https://api.remove.bg/v1.0/removebg`, {
        method: "POST",
        headers: {
          "X-Api-Key": "db15nDFfpEWLSncRnJw3mWmc",
        },
        body: formData,
      });
      if (response.ok) {
        const result = await response.blob();
        var urlCreator = window.URL || window.webkitURL;

        var imageUrl = urlCreator.createObjectURL(result);

        // abc = result;
        console.log("success", imageUrl);
        document.querySelector("#image").src = imageUrl;

        // saveImage(result);
        // Use the result, e.g., display the image or save it to a file
      } else {
        console.error("Background removal failed:", response.statusText);
      }
    } catch (error) {
      console.error("Background removal failed:", error);
    }
  }
  let timer;
  let turn = 0;
  function turnOn() {
    timer = setInterval(turnFan, 200);
    let x = document.getElementById("on");
    x.disabled = true;
  }

  // function turnOff() {
  //   clearInterval(timer);
  //   let x = document.getElementById("on");
  //   x.disabled = false;
  // }

  function turnFan() {
    let x = document.getElementById("img2");
    turn += 60;
    x.style.transform = "rotate(" + (turn % 360) + "deg)";
  }

  function zoomin() {
    var myImg = document.getElementById("img2");
    var currWidth = myImg.clientWidth;
    if (currWidth === 2500) return false;
    else {
      myImg.style.width = currWidth + 100 + "px";
    }
  }
  // Usage example
  // const fileInput = document.getElementById("imageInput");
  // fileInput.addEventListener("change", (event) => {
  //   const file = event.target.files[0];
  //   removeBackground(file);
  // });

  return (
    //   <div className="App">
    //     <header className="App-header">
    //       <img src={logo} className="App-logo" alt="logo" />
    //       <p>
    //         Edit <code>src/App.js</code> and save to reload..
    //       </p>
    //       <a
    //         className="App-link"
    //         href="https://reactjs.org"
    //         target="_blank"
    //         rel="noopener noreferrer"
    //       >
    //         Learn React
    //       </a>
    //     </header>
    //   </div>

    <div>
      <input type="file" id="imageInput" onChange={removeBackground} />
      <br />
      <img src={logo} id="image" alt="shital" />

      {/* <button className="btn btn-flat blue white-text" onClick={saveImage}>
        Save
      </button> */}
      {/* <a id="link">Download</a> */}
      <div className="img-div">
        <img src={img1} id="img1" width="400" height="400" alt="img1" />
        <img src={img2} id="img2" width="200" height="200" alt="img2" />
      </div>
      <button id="on" onClick={turnOn}>
        Rotate
      </button>
      <button id="on" onClick={zoomin}>
        Zoom
      </button>
      <br />
    </div>
  );
}

export default App;
