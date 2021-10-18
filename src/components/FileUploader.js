import React from "react";

const FileUploader = () => {
    let file
    const handleFileInput = (event) => {
        file = event.target.files[0];
        console.log(file);
        console.log(JSON.stringify(file));
    };

    return (
        <div className="FileUploader">
            <div className="file-uploader col-10 mt-5">
                <input type="file" className="form-control col-10" onChange={handleFileInput} />
            </div>
        </div>
    );
}

export default FileUploader;