import React from 'react'
import { FileUpload } from 'redux-file-upload'
//any other imports you need

export class Upload extends React.Component {

    render() {
        return(
            <FileUpload
                allowedFileTypes={['jpg', 'pdf']}
                data={{ type: 'picture' }}
                dropzoneId="fileUpload"
                url="./uploads/"
                >
                <button>
                    Click or drag here
                </button>
            </FileUpload>
        )
    }
}