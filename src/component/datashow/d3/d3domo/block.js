import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
//版本 v4+
import { creact } from './domoitem';
function D3block() {
    const d3Ref = useRef();
    const d3Ref2 = useRef();
    useEffect(() => {
        creactD3();
    }, []);
    let creactD3 = () => {
        creact(d3Ref2.current);

        const data = [12, 5, 6, 6, 9, 10];
        const svg = d3 //定义画布
            .select(d3Ref.current)
            .append('svg')
            .attr('width', 500)
            .attr('height', 300);
        svg.selectAll('rect')
            .data(data)
            .enter()
            .append('rect') //创建添加数据节点
            .attr('background', function(d) {
                return d === 10 ? '#eee' : '#5f4280';
            })
            .attr('x', (d, i) => i * 40) //回调函数来处理动态数据:
            .attr('y', (d, i) => 300 - 20 * d) //d为数点值，i为数据在数组中的索引
            .attr('width', 30)
            .attr('height', (d, i) => 20 * d)
            .on('mouseover', function(d, i) {
                //事件
                d3.select(this).attr('fill', 'yellow');
            })
            .on('mouseout', function(d, i, group) {
                d3.select(this).attr('fill', '#5f4280');
            })
            .attr('fill', '#5f4280')
            .attr('height', (d, i) => 0)
            .transition()
            // .ease('bounce')
            .duration(1000)
            .delay(500)
            .attr('height', (d, i) => 20 * d)
            .attr('fill', 'blue');
        // .transition() //过渡效果添加
        // .duration(2000) //设定元素从起始状态到终止状态的过渡时间；
        // .delay(function(d, i) {
        //     return i * 20;
        // }) //设定元素执行过渡效果的时间间隔； 延迟

        // .ease(d3.easeBackOut); //设定过渡的动画效果；

        svg.selectAll('text') //添加文字
            .data(data)
            .enter()
            .append('text')
            .text(d => d) //返回是是元素
            .attr('x', (d, i) => i * 40)
            .attr('y', (d, i) => 300)
            .transition()
            .duration(1000)
            .delay(500)
            .ease(d3.easeElasticIn)
            .attr('y', (d, i) => 300 - 20 * d - 3);
    };
    let move = () => {};
    return (
        <div>
            <div
                ref={d3Ref}
                style={{
                    padding: '10px',
                }}
            />
            <div
                ref={d3Ref2}
                style={{
                    padding: '10px',
                }}
            />
        </div>
    );
}
export default D3block;
