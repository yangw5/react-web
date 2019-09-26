import React from 'react';
import {Button} from 'antd'

export let ButtonGroup=({
    title=[{name:'查询'},{name:'重置'},]
})=>{
    return(
        <div>
            {
                title.map((v,i)=><Button>v.name</Button>)
            }
        </div>
    )
}