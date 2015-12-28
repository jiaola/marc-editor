import React from 'react';
import Dropzone from 'react-dropzone';
import DropzoneComponent from 'react-dropzone-component';
import ReactDOMServer from 'react-dom/server';

require('../../css/file-picker.css');

const initUploader = (props) => {

};

var componentConfig = {
  iconFiletypes: ['.jpg', '.png', '.gif'],
  showFiletypeIcon: true,
  postUrl: '/uploadHandler'
};
var djsConfig = {
  previewTemplate: ReactDOMServer.renderToStaticMarkup(
    <div className="dz-preview dz-file-preview">
      <div className="dz-details">
        <div className="dz-filename"><span data-dz-name></span></div>
        <img data-dz-thumbnail />
      </div>
      <div className="dz-progress"><span className="dz-upload" data-dz-uploadprogress></span></div>
      <div className="dz-success-mark"><span>✔</span></div>
      <div className="dz-error-mark"><span>✘</span></div>
      <div className="dz-error-message"><span data-dz-errormessage></span></div>
    </div>
  )
}


class Uploader extends React.Component {
  constructor(props) {
    super(props);
    this.state = initUploader(props);
    this.files = [];
  }

  onDrop(files) {
    this.setState({
      files: files
    });
  }

  render() {
    return (
            <DropzoneComponent config={componentConfig}
                               action="upload.php"
                               djsConifg={djsConfig}
            />
    );
  }
}

export default Uploader;