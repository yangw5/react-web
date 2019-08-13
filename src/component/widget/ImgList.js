import { React, Component } from 'antd';

class ImgList extends Component {
    constructor(prpos) {
        super(prpos);
    }
    setWidth=(data)=>{
        
    }

    render() {
        let { imgdata } = this.prpos;

        return (
            <div>
                {imgdata.map((v, i) => (
                    <img src={v.md5} />
                ))}
            </div>
        );
    }
}

export default ImgList;
