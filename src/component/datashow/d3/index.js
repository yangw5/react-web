import React, { useEffect, useState, useRef } from 'react';
import * as d3 from 'd3';
import D3block from './d3domo/block';
function D3() {
    const d3Ref = useRef();
    useEffect(() => {
        creactD3();
    }, []);
    let creactD3 = () => {};
    return (
        <div>
            <D3block></D3block>
        </div>
    );
}
export default D3;
