import React, {Component} from 'react';
import Dropzone from 'react-dropzone';


export default class Basic extends Component {
    state = {
        files: [],
        preview: ""
    }

    onDrop = (files) => {
        this.setState({
            files,
            preview: URL.createObjectURL(files[0])
        })

    };

    render() {
        return (
            <Dropzone onDrop={this.onDrop}>
                {({getRootProps, getInputProps}) => (
                    <section className="container">
                        <div {...getRootProps({className: 'dropzone'})}>
                            <input {...getInputProps()} />
                            <p>Drag 'n' drop some files here, or click to select files</p>
                        </div>
                        <aside>
                            <div>
                                {this.state.preview && <img className="thumb-img" src={this.state.preview} alt="thumb"/>}
                            </div>
                        </aside>
                    </section>
                )}
            </Dropzone>
        );
    }
}
