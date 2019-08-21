import React, { Component } from 'react';
import { BreadcrumbCustom } from '../../widget';
import { CreactActor } from '../../classextends/game/js/creactactor';
import img1 from '../../classextends/game/imgs/37988/1.png';
import img2 from '../../classextends/game/imgs/37988/2.png';
import img3 from '../../classextends/game/imgs/37988/3.png';
import img4 from '../../classextends/game/imgs/37988/4.png';
import img5 from '../../classextends/game/imgs/37988/5.png';
import img6 from '../../classextends/game/imgs/37988/6.png';
import img7 from '../../classextends/game/imgs/37988/7.png';
import img8 from '../../classextends/game/imgs/37988/8.png';

import fimg1 from '../../classextends/game/imgs/37988/F/f1.png';
import fimg2 from '../../classextends/game/imgs/37988/F/f2.png';
import fimg3 from '../../classextends/game/imgs/37988/F/f3.png';
import fimg4 from '../../classextends/game/imgs/37988/F/f4.png';
import fimg5 from '../../classextends/game/imgs/37988/F/f5.png';
import fimg6 from '../../classextends/game/imgs/37988/F/f6.png';
import fimg7 from '../../classextends/game/imgs/37988/F/f7.png';
import fimg8 from '../../classextends/game/imgs/37988/F/f8.png';

import a1 from '../../classextends/game/imgs/a1/a1.png';
import a2 from '../../classextends/game/imgs/a1/a2.png';
import a3 from '../../classextends/game/imgs/a1/a3.png';
import a4 from '../../classextends/game/imgs/a1/a4.png';

import aj1 from '../../classextends/game/imgs/a1/a1.jpg';
import aj2 from '../../classextends/game/imgs/a1/a2.jpg';
import aj3 from '../../classextends/game/imgs/a1/a3.jpg';
import aj4 from '../../classextends/game/imgs/a1/a4.jpg';
import { array } from 'prop-types';
let outside = [img1, img2, img3, img4, img5, img6, img7, img8];
let foutside = [fimg1, fimg2, fimg3, fimg4, fimg5, fimg6, fimg7, fimg8];
let a = [a1, a2, a3, a4];
let aj = [aj1, aj2, aj3, aj4];

class CaseShow extends Component {
    constructor(props) {
        super(props);
        this.actor = React.createRef();
        this.actor1 = React.createRef();
        this.actor2 = React.createRef();
        this.state = {
            actorarry: {},
            re: false,
        };
    }
    componentDidMount() {
        this.newactor();
    }
    hanldeDown = e => {
        this.state.actorarry['monster'][0].pause();
    };
    newactor = () => {
        let actorpoor = { ...this.state.actorarry };
        // let a = CreactActor(
        //     'actor',
        //     1,
        //     '小五',
        //     outside,
        //     [],
        //     this.state.actorarry,
        //     this.actor.current
        // );
        CreactActor({
            type: 'actor1',
            id: 2,
            name: '小五',
            outside: outside,
            permission: [],
            actorpoor: actorpoor,
            dom: this.actor1.current,
            fight1: foutside,
        });
        CreactActor({
            type: 'monster',
            id: 4,
            name: '凤凰',
            outside: a,
            permission: [],
            actorpoor: actorpoor,
            // dom: this.actor1.current,
        });
        CreactActor({
            type: 'monster',
            id: 5,
            name: '凤凰2',
            outside: a,
            permission: [],
            actorpoor: actorpoor,
            // dom: this.actor1.current,
        });
        this.setState(
            {
                actorarry: { ...actorpoor },
            },
            () => {
                Object.keys(this.state.actorarry).forEach(v => {
                    if (this.state.actorarry[v] instanceof Array) {
                        this.state.actorarry[v].forEach((v, i) => {
                            v.init(this);
                        });
                    } else {
                        this.state.actorarry[v].init(this);
                    }
                });
            }
        );
    };
    // hanldeUp = e => {
    //     //初始化设置按键
    //     this.state.actorarry['actor1'].init();
    // };
    onkeydown;
    render() {
        const breadItems = [{ title: '游戏人生' }];
        let { actorarry } = this.state;
        return (
            <div>
                <BreadcrumbCustom {...{ breadItems }} />
                <div
                    style={{
                        position: 'absolute',
                        width: '89%',
                        height: '89%',
                    }}
                >
                    {/* <img
                        style={{
                            position: 'relative',
                            left: '50px',
                            top: '50px',
                        }}
                        ref={this.actor}
                        onClick={e => this.hanldeDown(e)}
                        onDoubleClick={() => this.hanldeUp()}
                    /> */}
                    {Object.keys(actorarry).map(key => {
                        if (actorarry[key] instanceof Array) {
                            return actorarry[key].map((v, i) => (
                                <div
                                    key={i}
                                    className="actor__div"
                                    style={{
                                        display: 'fiex',
                                        position: 'relative',
                                        left: `${v.left}px`,
                                        marginLeft: '50px',
                                    }}
                                >
                                    <img src={v.src} title={v.name} />
                                </div>
                            ));
                        } else {
                            return (
                                <div
                                    className="actor__div"
                                    style={{
                                        position: 'fiex',
                                        left: `${actorarry[key].left}px`,
                                    }}
                                >
                                    <img src={actorarry[key].src} title={actorarry[key].name} />
                                </div>
                            );
                        }
                    })}
                    {/* <img
                        style={{
                            position: 'relative',
                            left: '50px',
                            top: '50px',
                        }}
                        ref={this.actor2}
                        onClick={e => this.hanldeDown(e)}
                        onDoubleClick={() => this.hanldeUp()}
                    /> */}
                    {/* <Actor /> */}
                    {/* onKeyDown={e => this.hanldeDown(e)} onKeyUp={e => this.hanldeUp(e)} */}
                    {/* <img src={require('../../classextends/game/imgs/37988/1.png')} /> */}
                </div>
            </div>
        );
    }
}

export default CaseShow;
