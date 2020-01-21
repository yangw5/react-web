/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-17 16:09:17
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-21 14:10:26
 * @FilePath: \react-web\src\component\widget\Form\FormRate.js
 */
import React, { useState } from 'react';
import { Form, Upload, Icon, message, Modal } from 'antd';
import './FromUpload.less';

const { Dragger } = Upload; //拖拽上传
// 文件状态改变的回调，返回为：

// {
//   file: { /* ... */ },
//   fileList: [ /* ... */ ],
//   event: { /* ... */ },
// }

// {
//     uid: 'uid',      // 文件唯一标识，建议设置为负数，防止和内部产生的 id 冲突
//     name: 'xx.png'   // 文件名
//     status: 'done', // 状态有：uploading done error removed
//     response: '{"status": "success"}', // 服务端响应内容
//     linkProps: '{"download": "image"}', // 下载链接额外的 HTML 属性
//  }

//fileList 当前的文件列表。

//event 上传中的服务端响应内容，包含了上传进度等信息，高级浏览器支持。

//注意：

// 在beforeUpload钩子函数里面，return false并不能阻止文件的上传，但是可以用promise里面的reject(file)来阻止
export default ({
    label,
    labelCol = { span: 4 },
    wrapperCol = { span: 12 },
    form,
    getFieldDecorator,
    required,
    validator,
    field,
    postSource = 'https://www.mocky.io/v2/5cc8019d300000980a055e76', //上传地址
    headers = { authorization: 'authorization-text' }, //设置上传的请求头部
    type = 'upload', //上传类型
    dragger = false, //拖拽上传
    listType = 'picture-card', //上传列表的内建样式，支持三种基本样式 text, picture 和 picture-card
    // showUploadList = false,
    showUploadList = { showPreviewIcon: true, showRemoveIcon: true, showDownloadIcon: true },
    //是否展示文件列表, 可设为一个对象，用于单独设定 showPreviewIcon, showRemoveIcon 和 showDownloadIcon
    //Boolean or { showPreviewIcon?: boolean, showRemoveIcon?: boolean, showDownloadIcon?: boolean }
    withCredentials = false, //上传请求时是否携带 cookie
    disabled, //是否禁用
    initialValue = [
        {
            uid: '-4',
            name: 'image.png',
            status: 'done',
            url: 'https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png',
        },
    ], //设置已上传的内容
    title = '上传',
    directory = false, //支持上传文件夹
    method = 'post', //上传请求的 http method
    multiple = false, //是否多选
    handleChange, //上传成功的回调函数
    beforeUpload, //上传文件之前的钩子
    Preview, //点击文件链接或预览图标时的回调
    childen, //自定义操作组件
    max = 2, //最多上传数
    fileType = ['png'],
    size = [0, 2],
}) => {
    let [fileList, setFileList] = useState(null); //已经上传的文件列表（受控）//已经上传的文件列表（受控），使用此参数时，如果遇到 onChange 只调用一次的问题
    let [fileLists, setFileLists] = useState(null); //上传文件列表
    let [previewVisible, setPreviewVisible] = useState(false); //预览组件状态
    let [previewImage, setPreviewImage] = useState(''); //预览组件地址
    let handleCancel = () => setPreviewVisible(false);
    let normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    let getBase64 = (file, callback) => {
        //多张上传
        if (showUploadList) {
            return new Promise((resolve, reject) => {
                const reader = new FileReader();
                reader.readAsDataURL(file);
                reader.onload = () => resolve(reader.result);
                reader.onerror = error => reject(error);
            });
        } else {
            const reader = new FileReader();
            reader.addEventListener('load', () => callback(reader.result));
            reader.readAsDataURL(file);
        }
    };
    let _beforeUpload = file => {
        //对上传的图片进行限制
        let isMax = true;
        if (fileLists && fileLists.length >= max) {
            message.error(`只能上传 ${max}个的文件!`);
            isMax = false;
        }
        beforeUpload && beforeUpload();
        let isJpgOrPng = false;
        fileType.forEach(v => {
            if (`image/${v}` === file.type) {
                isJpgOrPng = true;
            }
        });
        // const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
        if (!isJpgOrPng) {
            message.error(`请上传${fileType.join(',')}格式的文件!`);
        }
        let isSize = false;
        if (size.length > 1) {
            let imgsize = file.size / 1024 / 1024;
            isSize = imgsize > size[0] && imgsize < size[1];
        }
        if (!isSize) {
            message.error(`图片大小必须在 ${size[0]} ~ ${size[1]}MB 之间`);
        }
        console.log('对上传的图片进行限制');
        //上传文件之前的钩子，参数为上传的文件，若返回 false 则停止上传。支持返回一个 Promise 对象，Promise 对象 reject 时则停止上传，
        //resolve 时开始上传（ resolve 传入 File 或 Blob 对象则上传 resolve 传入对象）。注意：IE9 不支持该方法。
        let promise = new Promise(function(resolve, reject) {
            if (isSize && isJpgOrPng && isMax) resolve(file);
            else reject();
        });

        return promise;
    };
    let _handleChange = info => {
        //上传成功回调
        if (showUploadList) {
            setFileLists(info.fileList);
            return;
        }
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} 文件上传成功`);
            setFileLists(info.fileList);
            getBase64(info.file.originFileObj, imageUrl => setFileList(imageUrl));
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
        handleChange && handleChange();
        console.log('上传成功回调');
    };
    //对回显示的图片进行操作
    let ChangefileLis = info => {
        let cfileList = [...info.fileList];

        // 1. Limit the number of uploaded files
        // Only to show two recent uploaded files, and old ones will be replaced by the new
        cfileList = cfileList.slice(-2);

        // 读取响应并显示文件链接
        cfileList = cfileList.map(file => {
            if (file.response) {
                //组件将显示文件。url链接
                file.url = file.response.url;
            }
            return file;
        });
        setFileList(cfileList);
    };
    let transformFile = file => {
        //在上传之前转换文件。支持返回一个 Promise 对象
        console.log('上传转换');
    };
    let onRemove = file => {
        //'点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。'
        console.log(
            '点击移除文件时的回调，返回值为 false 时不移除。支持返回一个 Promise 对象，Promise 对象 resolve(false) 或 reject 时不移除。'
        );
    };
    let onDownload = () => {
        //点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页。
        console.log('点击下载文件时的回调，如果没有指定，则默认跳转到文件 url 对应的标签页。');
    };
    //上传文件改变时的状态 //点击文件链接或预览图标时的回调
    let _preview = async file => {
        Preview && Preview();

        if (!file.url && !file.preview) {
            file.preview = await getBase64(file.originFileObj);
        }
        setPreviewImage(file.url || file.preview);
        setPreviewVisible(true);
    };
    //静态自定义触发样式
    let uploadButton = dragger ? (
        <div>
            <p className="ant-upload-drag-icon">
                <Icon type="inbox" />
            </p>
            <p className="ant-upload-text">单击或拖动文件到此区域上传</p>
            <p className="ant-upload-hint">支持单个或批量上传。严禁上传公司资料 或其他波段文件</p>
        </div>
    ) : (
        <div>
            <Icon type={false ? 'loading' : 'plus'} />
            {title}
        </div>
    );
    //设置触发样式
    let setChilden = () => {
        let cuploadButton = null;
        // let cuploadButton  = (
        //     <Button>
        //         <Icon type="upload" />
        //         {title}
        //     </Button>
        // );
        let ImgSrouce = fileList;
        //为函数的时候，外部自定义
        if (typeof childen === 'function') {
            cuploadButton = childen();
        } else {
            cuploadButton = ImgSrouce ? (
                fileLists && fileLists.length >= max ? null : (
                    <img src={ImgSrouce} alt="avatar" style={{ width: '100%' }} />
                )
            ) : fileLists && fileLists.length >= max ? null : (
                uploadButton
            );
        }
        return cuploadButton;
    };

    let setComponent = () => {
        let ComponentName = Upload;
        if (dragger) {
            ComponentName = Dragger;
        }
        return (
            <ComponentName
                name="logo" //发到后台的文件参数名
                action={postSource} //上传图片地址
                // defaultFileList={[
                //     //设置已上传的内容

                // ]}
                // fileList={showUploadList ? fileList : []} //上传列表 已经上传的文件列表（受控），使用此参数时，如果遇到 onChange 只调用一次的问题
                className="avatar-uploader"
                beforeUpload={_beforeUpload} //限制用户上传 如图片格式和大小。
                transformFile={transformFile} //转换上传的文件（例如添加水印）
                onChange={_handleChange} //上传成功回调
                onPreview={_preview} //上传文件改变时的状态 //点击文件链接或预览图标时的回调
                onRemove={onRemove} //删除回调
                onDownload={onDownload} //下载回调
                {...{
                    headers,
                    disabled,
                    directory,
                    method,
                    multiple,
                    withCredentials,
                    listType, //上传文件为图片，可展示本地缩略图。IE8/9 不支持浏览器本地缩略图展示（Ref），可以写 thumbUrl 属性来代替
                    type, //上传类型
                    showUploadList, //是否展示文件列表, 可设为一个对象，用于单独设定 showPreviewIcon, showRemoveIcon 和 showDownloadIcon
                }}
            >
                {setChilden()}
            </ComponentName>
        );
    };

    return (
        <Form.Item
            {...{
                labelCol,
                wrapperCol,
                label,
            }}
        >
            {getFieldDecorator(field, {
                rules: [
                    {
                        required,
                        message: `请输入${label}`,
                        transform: value => JSON.stringify(value),
                    }, //`
                    { validator },
                ],
                initialValue,
                // valuePropName: 'fileList',
                // getValueFromEvent: normFile,
            })(
                setComponent()
                // <Upload
                //     name="logo" //发到后台的文件参数名
                //     action={postSource} //上传图片地址
                //     // defaultFileList={[
                //     //     //设置已上传的内容

                //     // ]}
                //     // fileList={showUploadList ? fileList : []} //上传列表 已经上传的文件列表（受控），使用此参数时，如果遇到 onChange 只调用一次的问题
                //     className="avatar-uploader"
                //     beforeUpload={_beforeUpload} //限制用户上传 如图片格式和大小。
                //     transformFile={transformFile} //转换上传的文件（例如添加水印）
                //     onChange={_handleChange} //上传成功回调
                //     onPreview={_preview} //上传文件改变时的状态 //点击文件链接或预览图标时的回调
                //     onRemove={onRemove} //删除回调
                //     onDownload={onDownload} //下载回调
                //     {...{
                //         headers,
                //         disabled,
                //         directory,
                //         method,
                //         multiple,
                //         withCredentials,
                //         listType, //上传文件为图片，可展示本地缩略图。IE8/9 不支持浏览器本地缩略图展示（Ref），可以写 thumbUrl 属性来代替
                //         type, //上传类型
                //         showUploadList, //是否展示文件列表, 可设为一个对象，用于单独设定 showPreviewIcon, showRemoveIcon 和 showDownloadIcon
                //     }}
                // >
                //     {setChilden()}
                // </Upload>
            )}
            {
                <Modal visible={previewVisible} footer={null} onCancel={handleCancel}>
                    <img alt="example" style={{ width: '100%' }} src={previewImage} />
                </Modal>
            }
        </Form.Item>
    );
};
