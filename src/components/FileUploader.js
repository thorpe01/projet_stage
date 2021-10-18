import React, {useState,useRef} from "react";

const FileUploader = () => {
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null);
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        setName(file.name);
        setSelectedFile(file);
    }

    const submitForm = () => {
        console.log(name);
        console.log(selectedFile);
        console.log(JSON.stringify(selectedFile));
        const formData = new FormData();
        formData.append("name",name);
        formData.append("file", selectedFile);
      };

    return (
        <div className="FileUploader">
            <div className="file-uploader input-group col-10 mt-5">
                <input type="file" className="form-control col-10" onChange={handleFileInput} />
                <input type="submit" className="btn btn-outline-secondary col-2" onClick={(file) => setSelectedFile(file), 
                                                                                (file) => setName(file.name),
                                                                                 e => fileInput.current && fileInput.current.click(),
                                                                                 submitForm} />
            </div>
        </div>
    )
}

export default FileUploader;