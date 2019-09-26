import React, { useState, useEffect, useRef } from 'react';
import { imglsit } from '../../axios';
import './ImgList.less';
function ImgList({
    maxheght = 200,
    minheight = 150,
    defaultheight = 150,
    feachapi,
    pageNo,
    pageSize,
    initvalue,
}) {
    let [imgdata, setImagdata] = useState([]); //图片资源数组
    let [newsize, setNewsize] = useState([]); //计算所得宽高数组
    const fdiv = useRef();
    //屏幕变化更新视图
    window.onresize = () => {
        setSize();
    };
    useEffect(() => {
        imglsit({ pageNo: 1, pageSize: 50 }).then(res => {
            setImagdata(res.data.list);
            setSize();
        });
    }, [imgdata]);
    //等高瀑布流
    let setSize = () => {
        //算法：h*w1/h1+h*w2/h2+...+h*wn/hn=w
        let heightArry = []; //高度数组（）每排图片高度
        let indexArry = []; //序号数组（每排图片数量）
        let getAtty = [];
        let maxh = maxheght,
            minh = minheight, //高度区间
            defaulth = defaultheight; //默认高度
        let fwidth = fdiv.current ? fdiv.current.clientWidth - 5 : 0; //容器宽度
        let _imglist = [...imgdata]; //copy
        let h = 0; //实际高度
        let bl = 0; //实际比例和
        _imglist.forEach((item, i) => {
            //需要特殊处理特殊尺寸图片 过长且比例过大
            if (item.width > 1200) {
                if (item.width / item.height > 3) {
                    item.width = item.height * 3;
                }
            }
            bl = bl + item.width / item.height;
            h = fwidth / bl; //存在着h度没有落在区间的情况
            if (h > minh && h < maxh) {
                heightArry.push(h);
                indexArry.push(i);
                let v = {
                    height: h,
                    index: i,
                };
                getAtty.push(v);
                h = 0;
                bl = 0;
            }
        });
        let sizeinit = [];
        _imglist.forEach((item, i) => {
            if (getAtty.length === 0) {
                let arry = {};
                arry.width = (defaulth * item.width) / item.height;
                arry.height = defaulth;
                sizeinit.push(arry);
            } else {
                for (let j = 0; j < getAtty.length; j++) {
                    if (i <= getAtty[j].index) {
                        let arry = {};
                        arry.width = (getAtty[j].height / item.height) * item.width;
                        arry.height = getAtty[j].height;
                        sizeinit.push(arry);
                        break;
                    }
                }
                //最后一排特殊处理 需要优化
                if (i > getAtty[getAtty.length - 1].index) {
                    let arry = {};
                    arry.width = (defaulth * item.width) / item.height;
                    arry.height = defaulth;
                    sizeinit.push(arry);
                }
            }
        });
        setNewsize(sizeinit);
    };
    return (
        <div className={'img-container'} ref={fdiv}>
            <ul className="img-container__ul">
                {imgdata &&
                    imgdata.map((v, i) => (
                        <li className="img-container__ul__li">
                            <img
                                className="img-container__img"
                                src={v.md5}
                                title={'1'}
                                style={
                                    newsize[i] && {
                                        width: `${newsize[i].width}px`,
                                        height: `${newsize[i].height}px`,
                                    }
                                }
                            />
                            <div className="img-container-title">
                                <span title={v.title}>{v.title}</span>
                                <span title={`分辨率：${v.width}*${v.height}`}>{`分辨率：${
                                    v.width
                                }*${v.height}`}</span>
                            </div>
                        </li>
                    ))}
            </ul>
        </div>
    );
}

export default ImgList;
