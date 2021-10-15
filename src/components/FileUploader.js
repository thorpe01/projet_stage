import React, {useRef} from "react"

const FileUploader = ({onFileSelect}) => {
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        const file = e.target.files[0];
        console.log(file);
       /* if (file.size > 1024){
            onFileSelectError({error:"File size cannot exceed more than 1MB"});
        }else {
            onFileSelectSuccess(file);
        }*/
    }

    return (
        <div className="file-uploader group-form">
            <input type="file" onChange={handleFileInput} />
            <button onClick={e => fileInput.current && fileInput.current.click()} >Envoyer</button>
        </div>
    )
}

export default FileUploader;