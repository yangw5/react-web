/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-17 16:09:17
 * @LastEditors  : yangw5
 * @LastEditTime : 2020-01-17 16:39:15
 * @FilePath: \react-web\src\component\widget\Form\FormRate.js
 */
import React from 'react';
import { Form, Upload, Button, Icon } from 'antd';

export default ({
    label,
    labelCol = { span: 5 },
    wrapperCol = { span: 60 },
    form,
    disabled,
    getFieldDecorator,
    field,
    initialValue,
    required,
    validator,
    title = '上传',
    directory,
    method,
    multiple,
}) => {
    let normFile = e => {
        console.log('Upload event:', e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    let getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    };
    let beforeUpload = () => {
        //对上传的图片进行限制
    };
    let handleChange = info => {
        //上传成功回调
    };
    let transformFile = file => {
        //上传转换
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
                valuePropName: 'fileList',
                getValueFromEvent: normFile,
            })(
                <Upload
                    name="logo"
                    action="/upload.do"
                    listType="picture"
                    className="avatar-uploader"
                    showUploadList={false}
                    beforeUpload={beforeUpload}
                    transformFile={transformFile}
                    onChange={handleChange}
                    {...{
                        disabled,
                        directory,
                        method,
                        multiple,
                    }}
                >
                    <Button>
                        <Icon type="upload" />
                        {title}
                    </Button>
                </Upload>
            )}
        </Form.Item>
    );
};
