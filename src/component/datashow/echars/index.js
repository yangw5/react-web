/*
 * @File:
 * @Description:
 * @Autor: yangw5
 * @Email: yangw5@163.com
 * @Date: 2020-01-21 16:29:14
 * @LastEditors: yangw5
 * @LastEditTime: 2020-02-27 16:06:36
 * @FilePath: \react-web\src\component\datashow\echars\index.js
 */
import React, { Component } from 'react';
import { BreadcrumbCustom } from '../../widget';
import 'echarts-gl'; //可直接使用echarts-for-react插件进行开发
import EacharPoint from './widget/EacharPoint';
import {
    option,
    option2,
    option3,
    option4,
    option5,
    option6,
    option7,
    option8,
    option9,
    option10,
} from './widget/data';
class Echaers extends Component {
    doacton = myecharts => {
        myecharts.on('updateAxisPointer', function(event) {
            var xAxisInfo = event.axesInfo[0];
            if (xAxisInfo) {
                var dimension = xAxisInfo.value + 1;
                myecharts.setOption({
                    series: {
                        id: 'pie',
                        label: {
                            formatter: '{b}: {@[' + dimension + ']} ({d}%)',
                        },
                        encode: {
                            value: dimension,
                            tooltip: dimension,
                        },
                    },
                });
            }
        });
    };
    render() {
        const breadItems = [{ title: '数据可视化' }, { title: 'echar' }];
        return (
            <div style={{ height: '100%' }}>
                <BreadcrumbCustom {...{ breadItems }} />
                <div
                    style={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        padding: '30px',
                    }}
                >
                    <div>
                        <div>基础图表</div>
                        <EacharPoint option={option} id="x1" width={'300px'} height={'300px'} />
                    </div>
                    <div>
                        <div>dataset图表</div>
                        <EacharPoint option={option2} id="x2" width={'300px'} height={'300px'} />
                    </div>
                    <div>
                        <div>dataset+seriesLayoutBy 配置项图表</div>
                        <EacharPoint option={option3} id="x3" width={'300px'} height={'300px'} />
                    </div>
                    <div>
                        <div>绘制南丁格尔图</div>
                        <EacharPoint option={option4} id="x4" width={'300px'} height={'300px'} />
                    </div>
                    <div>
                        <div>异步数据处理</div>
                        <EacharPoint
                            id="x5"
                            option={option5().option}
                            getoption={option5().setoption}
                            width={'300px'}
                            height={'300px'}
                        />
                    </div>
                    <div>
                        <div>异步加载数据处理</div>
                        <EacharPoint
                            id="x6"
                            option={option6().option}
                            type={'axios'}
                            width={'300px'}
                            height={'300px'}
                        />
                    </div>
                    <div>
                        <div>异步数据动态更新</div>
                        <EacharPoint
                            id="x7"
                            option={option7().option}
                            getoption={option7().setoption}
                            width={'300px'}
                            height={'300px'}
                        />
                    </div>
                    <div>
                        <div>自定义x y</div>
                        <EacharPoint id="x8" option={option8} width={'300px'} height={'300px'} />
                    </div>
                    <div>
                        <div>自定义 共享数据加联动</div>
                        <EacharPoint
                            id="x9"
                            action={this.doacton}
                            option={option9}
                            width={'600px'}
                            height={'600px'}
                        />
                    </div>
                    <div>
                        <div>图表事件</div>
                        <EacharPoint id="x10" option={option10} width={'600px'} height={'600px'} />
                    </div>
                </div>
            </div>
        );
    }
}
export default Echaers;
