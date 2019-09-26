import React,{useState, useEffect} from "react";
import {Button} from 'antd'
import AuthPermission from './AuthPermission'
import {mergeArrWithAuth} from '../../utils'

function Buttons({
  hasButtons,requirement
}) {
let [btns,setBtns]=useState([
  {
    title:'显示'
  },
  {
    title:'显示2'
  }
]);
useEffect(() => {
  let b=mergeArrWithAuth(btns, requirement);
  setBtns(b)//给按钮上权限
}, [])
  return (
    hasButtons &&<div>
      <Button.Group>
      {
          btns&&btns.map((v)=>
          <AuthPermission requirement={v.requirement} key={v.title}>
            <Button>{v.title}</Button>
          </AuthPermission>
          )
        }
      
      </Button.Group>
    </div>
  );
}

export default Buttons;
