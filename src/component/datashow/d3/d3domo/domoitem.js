//寄居组合式继承
import * as d3 from 'd3';

//基础对象
function common(ref, styleArry) {
    this.ref = ref;
    this.styleArry = styleArry;
}
common.prototype = {
    //属性设置
    setup: function() {
        this.styleArry.forEach(Item => {
            this.ref.attr(Item['style'], Item['value']);
        });
    },
};

function extendproto(child, parent) {
    let prototype = Object.create(parent.prototype);
    prototype.constructor = child;
    child.prototype = prototype;
}

function Svg(ref, styleArry) {
    common.call(this, ref, styleArry);
}
extendproto(Svg, common);

//饼状图
function Circle(ref, styleArry, data) {
    common.call(this, ref, styleArry);
    this.init = function() {
        let pie = d3.pie();
        let piedata = pie(data);
        let outerRadius = 100; //外半径
        let innerRadius = 0; //内半径，为0则中间没有空白

        let arc = d3
            .arc() //弧生成器
            .innerRadius(innerRadius) //设置内半径
            .outerRadius(outerRadius); //设置外半径
        let color = d3.schemeCategory10; //d3内置有十种颜色的颜色
        let arcs = ref
            .selectAll('g')
            .data(piedata)
            .enter()
            .append('g')
            .attr('transform', 'translate(' + 150 + ',' + 100 + ')'); //平移 偏移量
        arcs.append('path')
            .attr('fill', function(d, i) {
                return color[i];
            })
            .attr('d', function(d) {
                return arc(d); //调用弧生成器，得到路径值
            })
            .on('mouseover', function(d, i) {
                //事件
            })
            .on('mouseout', function(d, i, group) {
                d3.select(this).attr();
            });
        arcs.append('text')
            .attr('transform', function(d) {
                var x = arc.centroid(d)[0]; //获取弧中心坐标
                var y = arc.centroid(d)[1];
                return 'translate(' + x + ', ' + y + ')';
            })
            .attr('fill', 'red')
            .attr('text-anchor', 'middle')
            .text(function(d) {
                return d.value;
            });
    };
}
extendproto(Circle, common);
//代理模式
function creactSvg(ref, styleArry = data) {
    let dom = d3.select(ref).append('svg');
    let svg = new Svg(dom, styleArry);
    svg.setup();
    return dom;
}

function creactCircle(ref, styleArry, data = dataset) {
    let circle = new Circle(ref, styleArry, data);
    circle.init();
}
//复杂工厂模式
function creact(ref, styleArry) {
    let svg = creactSvg(ref);
    svg.append('rect')
        .attr('width', '100%')
        .attr('height', '100%')
        .attr('fill', 'pink');
    creactCircle(svg);
}
let data = [
    { style: 'width', value: 300 },
    { style: 'height', value: 200 },
    { style: 'fill', value: '#5f4280' },
];
let dataset = [30, 10, 43, 55, 13];
export { creact };
