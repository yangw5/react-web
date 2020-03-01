/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-02-21 09:18:28
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-21 10:07:38
 * @FilePath: \react-web\src\component\widget\modal\InportContent.js
 */
import React, { useState } from 'react';
import { Upload, message, Button, Icon } from 'antd';
import './InportContent.less';

const InportContent = props => {
    let [file, setFile] = useState('');
    let downLoad = () => {
        alert('下载模板');
        props.downLoad && props.downLoad();
    };
    let choose = info => {
        const files = document.getElementById('fileImport').files;
        setFile(files[0]);
        // if (info.file.status !== 'uploading') {
        //     console.log(info.file, info.fileList);
        // }
        // if (info.file.status === 'done') {
        //     message.success(`${info.file.name} file uploaded successfully`);
        // } else if (info.file.status === 'error') {
        //     message.error(`${info.file.name} file upload failed.`);
        // }
    };
    return (
        <div className={'IpoC_root'}>
            <div className={'IpoC_item'}>
                <span className={'IpoC_item_title'}>下载模板</span>
                <span
                    className={'IpoC_item_action'}
                    onClick={() => {
                        downLoad();
                    }}
                >
                    点击下载模板
                </span>
            </div>
            <div className={'IpoC_item'}>
                <span className={'IpoC_item_title'}>上传附件</span>
                {/* <Upload>
                    <Button>
                        <Icon type="upload" /> 点击上传附件
                    </Button>
                </Upload> */}
                <div className="IpoC_item_upload">
                    选择文件
                    <input
                        className="IpoC_item_upload__input"
                        id="fileImport"
                        type="file"
                        onChange={choose}
                    />
                </div>
                <div className="IpoC_item_file_name">{file ? file.name : '未选择任何文件'}</div>
            </div>
        </div>
    );
};
export default InportContent;
