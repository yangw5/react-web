
import React,{useRef,useImperativeHandle,forwardRef} from 'react';


const DeleteItems=(props,ref)=>{
  const dataModal=useRef();
  const childRef = React.createRef(); 
  useImperativeHandle(ref,()=>dataModal);
  let onSubmit = () => {
   
};
  return <div>
    删除1
  </div>
}
export default forwardRef(DeleteItems);