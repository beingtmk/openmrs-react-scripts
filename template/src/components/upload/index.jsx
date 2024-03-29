import React from 'react';

import { Upload, Icon, message } from 'antd';

const { Dragger } = Upload;

const props = {
  name: 'file',
  multiple: true,
  // this is the endpoint
  action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
  onChange(info) {
    const { status } = info.file;
    if (status !== 'uploading') {
      console.log(info.file, info.fileList);
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`);
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`);
    }
  },
};

const UploadComponent = () => {
  return (
    <Dragger {...props}>
      <p className="ant-upload-drag-icon">
        <Icon type="inbox" />
      </p>
      <p className="ant-upload-text">Click or drag file to this area to upload</p>
      <p className="ant-upload-hint">
        Support for a single or bulk upload.
      </p>
    </Dragger>

  );
};

export default UploadComponent;
