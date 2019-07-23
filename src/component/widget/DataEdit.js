import React,{Component} from 'react';
import {Form} from 'adtd'
import{FormInput, FormSelect} from './index'
import styles from './DataEdit.module.less';
 
 class DataEdit extends Component{
   constructor(props){
     super(props);
     this.state={};
     this.components = {
      'input': FormInput,
      'select': FormSelect,
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
    }
   }
   componentDidUpdate(){

   }

  _renderForm=(ComponentName,item)=>{
    const props={
      ...this.props.form,
      query:this.props.query
    }
   return <ComponentName {...props} />
  }
   render(){
    const {items}
     return(
       <Form >
         {
           items.map((item,i)=>{
            <span>
             {this._renderForm(this.components[item.fieldType], item)}
            </span>
           })
         }
       </Form>
     )
   }
 }