import React from "react";

const FileUploader = ({setData}) => {

    const handleFileInput = (event) => {
            let file = event.target.files[0];

            var fileReader = new FileReader();
            fileReader.onload = function (event) {setData(event.target.result)};
            fileReader.readAsText(file);
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