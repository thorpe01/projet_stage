function FileUploader(event){

    let file = event.target.files[0];
    let extension = file.name.split('.')[1]; 
    let fileReader = new FileReader();

    if (extension ==="csv"){
        fileReader.onload = function (file) {
            let lines = file.target.result.split("\n");
            lines.pop();
            
            for (let i=0; i < lines.length; i++){
                lines[i] = lines[i].split("\r")[0]
            };

            let result = [];
            let headers = lines[0].split(";");
    
            for (let i=1; i<lines.length; i++){
                let obj = {};
                let currentLine = lines[i].split(";");
    
                for(let j=0 ; j < headers.length; j++){
                    obj[headers[j]] = currentLine[j];
                }
                result.push(obj);
            }
            localStorage.setItem("data", JSON.stringify(result));
        };
        fileReader.readAsText(file);
    }

    if (extension === 'json'){
        fileReader.onload = function (event) {localStorage.setItem("data", event.target.result)};
        fileReader.readAsText(file);
    } 

    else if (extension !== 'csv'){
        file = null;
        alert("format inconnu, veuillez inserer un JSON ou un CSV");
    }

};

export default FileUploader;
