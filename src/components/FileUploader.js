

function FileUploader(event){
    let file = event.target.files[0];
    let extension = file.name.split('.')[1];

    if (extension ==="csv"){
        convertToJson(file);
    }

    if (extension === 'json'){
        var fileReader = new FileReader();
        fileReader.onload = function (event) {JSON.parse(event.target.result)};
        fileReader.readAsText(file);
    } else if (extension !== 'csv'){
        file = null;
        alert("format inconnu, veuillez inserer un JSON ou un CSV");
    }
};

function convertToJson(file) {
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
        JSON.parse(JSON.stringify(result));
    };
    fileReader.readAsText(file);
};

export default FileUploader;