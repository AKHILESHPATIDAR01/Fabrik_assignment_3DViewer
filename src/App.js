import { useState } from 'react';
import {OBJModel} from 'react-3d-viewer'
 import './App.css';

function App() {
  const [uploadedFile , setUploadedFile ] = useState("");

  const handleUpload = (e)=>{
    setUploadedFile(e.target.files[0]);
  }

  return (
    <div className="Main">

        <div className="OuterBox">
            <div className="inner-left">
              <input type="file" className="custom-input" onChange={handleUpload} />
              <p>Filename: {uploadedFile.name}</p>
              <p>File type: {uploadedFile.type}</p>
              <p>File size: {uploadedFile.size} bytes</p>
              {/* {file && <ImageThumb image={file} />} */}
            </div>

            <div className="inner-right">
                <OBJModel src={uploadedFile} texPath=""/>
            </div>
        </div>


    </div>
  );
}

export default App;
