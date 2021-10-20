import React from "react";

const FileUploader = ({setData}) => {

    const handleFileInput = (event) => {
            let file = event.target.files[0];
            let extension = file.name.split('.')[1];

            if (extension ==="csv"){
                convertToJson(file);
            }

            if (extension === 'json'){
                var fileReader = new FileReader();
                fileReader.onload = function (event) {setData(JSON.parse(event.target.result))};
                fileReader.readAsText(file);
            } else if (extension !== 'csv'){
                file = null;
                alert("format inconnu, veuillez inserer un JSON ou un CSV");
            }
    };

    const convertToJson = (file) => {
        var fileReader = new FileReader();

        fileReader.onload = function (file) {
            let lines = file.target.result.split("\n");
            let result = [];
            let headers = lines[0].split(";");

            for (let i=1; i<lines.length;i++){
                let obj = {};
                let currentLine = lines[i].split(";");

                for(let j=0 ;j < headers.length ; j++){
                    obj[headers[j]] = currentLine[j];
                }
                result.push(obj);
            }
            setData(JSON.parse(JSON.stringify(result)));
        };
        fileReader.readAsText(file);
    }

    return (
        <div className="FileUploader">
            <div className="file-uploader col-10 mt-5">
                <input type="file" className="form-control col-10" accept=".json, .csv"onChange={handleFileInput} />
            </div>
        </div>
    );
}

export default FileUploader;