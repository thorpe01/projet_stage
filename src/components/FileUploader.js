import React, {useState,useRef} from "react";

const FileUploader = () => {
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        setSelectedFile(file);
        console.log("selectedFile avant submit : ");
        console.log(selectedFile);
    }

    const submitForm = () => {
        console.log("selectedFile après submit : ");
        console.log(selectedFile);
      /*  const formData = new FormData();
        formData.append("file", selectedFile);*/
      };

    return (
        <div className="FileUploader">
            <div className="file-uploader input-group col-10 mt-5">
                <input type="file" className="form-control col-10" onChange={handleFileInput} />
                <input type="submit" className="btn btn-outline-secondary col-2" onClick={(file) => setSelectedFile(file), 
                                                                                 e => fileInput.current && fileInput.current.click(),
                                                                                 submitForm} />
            </div>
        </div>
    )
}

export default FileUploader;