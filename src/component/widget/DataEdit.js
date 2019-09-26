import React, { Component } from 'react';
import { Form } from 'antd';
import { FromInput,FormSelect, FormCheckBox,FormData,Formcombin,FromSearch, } from './index';
import styles from './DataEdit.module.less';

class DataEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.components = {
            input: FromInput,
            select: FormSelect,
            add: Formcombin,
            date:FormData,
            search:FromSearch,
            checkbox:FormCheckBox
            // 'textarea': FormTextArea,
            // 'radio': FormRadio,
            // 'inputGroup': FormInputGroup,
            // 'inputMultiple': FormInputMultiple,
            // 'inputSearch': FormInputSearch,
            // 'inputStr': FormInputStr,
            // 'tags': FormTags,
            // 'selectSearch': FormSelectSearch,
            // 'date': FormDate,
            // 'time': FormTime,
            // 'copyrights': TableCopyrights,
            // 'relateSongs': FormRelateSongs,
            // 'songLrc': SongLrc,
            // 'table': TableWidget,
            // 'custom': FormCustom,
            // 'songDesc': FormSongDesc,
            // 'fileUpload': FormUpload,
            // 'colors': FormColors,
        };
    }
    componentDidUpdate() {}

    _renderForm = (ComponentName, item) => {
        const props = {
            ...this.props.form,
            query: this.props.query,
            ...item,
        };
        return <ComponentName {...props} />;
    };
    render() {
        const { items } = this.props;
        return (
            <Form className={styles.root} layout="inline">
                {items.map((item, i) => (
                    <span key={i} className={styles[item.classname]||styles['whole']}>
                        {this._renderForm(this.components[item.fieldType], item)}
                    </span>
                ))}
            </Form>
        );
    }
}

export default DataEdit;
