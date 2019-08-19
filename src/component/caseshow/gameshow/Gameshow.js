import React, { Component } from 'react';
import { BreadcrumbCustom } from '../../widget';
import { CreactActor, CreactActor1 } from '../../classextends/game/actor';
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
class CaseShow extends Component {
    constructor(props) {
        super(props);
        this.actor = React.createRef();
        this.actor1 = React.createRef();
        this.state = {
            actorarry: [],
        };
    }
    componentDidMount() {
        let outside = [img1, img2, img3, img4, img5, img6, img7, img8];
        let foutside = [fimg1, fimg2, fimg3, fimg4, fimg5, fimg6, fimg7, fimg8];
        let a = CreactActor(
            'actor',
            1,
            '小五',
            outside,
            [],
            this.state.actorarry,
            this.actor.current
        );
        let b = CreactActor1(
            'actor1',
            2,
            '小五1',
            outside,
            [],
            this.state.actorarry,
            this.actor1.current,
            foutside
        );
        this.setState(
            {
                actorarry: b,
            },
            () => {
                this.state.actorarry['actor1'].show();
            }
        );
        window.addEventListener('keydown', this.hanldeUp);
    }
    hanldeDown = e => {
        this.state.actorarry['actor1'].pause();
    };
    hanldeUp = e => {
        let key = e.keyCode;
        if (key === 39) {
            this.state.actorarry['actor1'].walking();
        }
        if (key === 70) {
            this.state.actorarry['actor1'].fighting();
        }
        if (key === 69) {
            this.state.actorarry['actor1'].say();
        }
    };
    onkeydown;
    render() {
        const breadItems = [{ title: '游戏人生' }];
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
                    <p>-----------------------------</p>
                    <img
                        style={{
                            position: 'relative',
                            left: '50px',
                            top: '50px',
                        }}
                        ref={this.actor1}
                        onClick={e => this.hanldeDown(e)}
                        onDoubleClick={() => this.hanldeUp()}
                    />
                    {/* <Actor /> */}
                    {/* onKeyDown={e => this.hanldeDown(e)} onKeyUp={e => this.hanldeUp(e)} */}
                    {/* <img src={require('../../classextends/game/imgs/37988/1.png')} /> */}
                </div>
            </div>
        );
    }
}

export default CaseShow;
