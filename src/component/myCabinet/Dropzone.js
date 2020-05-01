import React, { useCallback } from 'react'
import { useDropzone } from 'react-dropzone'
import axios from 'axios';
import FormData from 'form-data';


function MyDropzone() {
    const onDrop = useCallback(acceptedFiles => {
        const formData = new FormData();
        const file = acceptedFiles[0];
        formData.append('file', file)
        axios.post('http://localhost:4000/upload', formData, {
        }).then(res => {
            console.log(res.statusText)
        })
    }, [])

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop })

    return (
        <div {...getRootProps()}>
            <input  {...getInputProps()} />
            {
                isDragActive ?
                    <p>Drop the files here ...</p> :
                    <p>Drag 'n' drop some files here, or click to select files</p>
            }

        </div>
    )
}
export default MyDropzone;




