import React, { useState, useEffect } from 'react';
import { imglsit } from '../../axios';
import './ImgList.less';
function ImgList({}) {
    let [imgdata, setImagdata] = useState([]);
    useEffect(() => {
        imglsit({ pageNo: 1, pageSize: 50 }).then(res => {
            setImagdata(res.data.list);
        });
    }, []);
    let setSize = () => {};
    return (
        <div className={'img-container'}>
            <ul className="img-container__ul">
                {imgdata &&
                    imgdata.map((v, i) => (
                        <li className="img-container__ul__li">
                            <img className="img-container__img" src={v.md5} />
                            <div className="img-container-title">
                                <span>{v.title}</span>
                                <span>{`分辨率：${v.width}*${v.height}`}</span>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default ImgList;
