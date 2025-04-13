import React, { useState } from 'react';
import { Input, message, Upload } from 'antd';
import { UploadOutlined } from '@ant-design/icons';
import type { UploadProps } from 'antd';
const { TextArea } = Input;
const props: UploadProps = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};
const UploadTextArea: React.FC = () => {
    const [value, setValue] = useState('');

    return (
        <div style={{ position: 'relative' }}>
            <TextArea
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="Write something here..."
                autoSize={{ minRows: 4, maxRows: 6 }}
                style={{
                    paddingRight: 70, // chừa khoảng cho 2 icon bên phải
                    fontSize: 14,
                }}
            />
            <Upload {...props}>
                <UploadOutlined 
                    style={{
                        position: 'absolute',
                        top: 10,
                        right: 10,
                        fontSize: 18,
                        color: '#999',
                        cursor: 'pointer',
                    }}
                    onClick={() => {
                        console.log('Upload clicked');
                    }}
                />
            </Upload>
        </div>
    );
};

export default UploadTextArea;
