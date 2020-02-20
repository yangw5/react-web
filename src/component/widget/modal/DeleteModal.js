import React,{useRef,useImperativeHandle,forwardRef} from 'react';
import DataModal from './DataModal';
import DeleteItems from './DeleteItems';

const DeleteModal=(props,ref)=>{
  const dataModal=useRef();
  const childRef = React.createRef(); 
  useImperativeHandle(ref,()=>dataModal);
  let onSubmit = () => {
    let { _onSubmit,beforeSubmit } = props;
            //提交前
            beforeSubmit && beforeSubmit();
            //提交
            _onSubmit && _onSubmit();
            dataModal._onClose();
};
  return <DataModal
        ref={dataModal}
        style={{ width: '700px' }}
        title={props.title}
        _onSubmit={onSubmit}
        _onCance={props._onCance&&props._onCance}
    >
      <DeleteItems />
    </DataModal>
}
export default forwardRef(DeleteModal);