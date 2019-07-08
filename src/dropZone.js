import React, {useEffect, useState} from 'react';
import {useDropzone} from 'react-dropzone';


const DropZone = (props) => {
    const [files, setFiles] = useState([]);
    console.log(files);

    const { getRootProps, getInputProps } = useDropzone({
        onDrop: acceptedFiles => {
            setFiles(acceptedFiles.map(file => Object.assign(file, {
                preview: URL.createObjectURL(file)
            })));
        }
    });

    const thumbs = files.map(file => (
        <div key={file.name}>
            <div>
                <img className="thumb-img"
                     src={file.preview}
                     alt="thumb"
                />
            </div>
        </div>
    ));

    useEffect(() => () => {
        files.forEach(file => URL.revokeObjectURL(file.preview));
    }, [files]);

    // const files = acceptedFiles.map(file => {
    //     return(
    //     <li key={file.path}>
    //         {file.path} - {file.size} bytes
    //     </li>
    // )});

    return (
        <section className="container">
            <div {...getRootProps({className: 'dropzone'})}>
                <input {...getInputProps()} />
                <p>Drag 'n' drop some files here, or click to select files</p>
            </div>
            <aside>
                <h4>Files</h4>
                <ul>{thumbs}</ul>
            </aside>
        </section>
    );
};

export default DropZone;
