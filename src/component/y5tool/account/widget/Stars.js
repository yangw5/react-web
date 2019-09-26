import React, { useState, useEffect } from 'react';
import { Rate } from 'antd';

function Stars({ allowHalf, disabled = false, desc, type, character }) {
    const descdefault = ['terrible', 'bad', 'normal', 'good', 'wonderful'];
    let [value, setValue] = useState(3);
    let handleChange = value => {
        setValue(value);
    };
    return (
        <div>
            {type === 'write' ? (
                <span>
                    <Rate
                        {...{ allowHalf, disabled, character }}
                        tooltips={desc || descdefault}
                        onChange={handleChange}
                        value={value}
                    />
                    {value && desc ? (
                        <span className="ant-rate-text">{desc[value - 1]}</span>
                    ) : (
                        descdefault[value - 1]
                    )}
                </span>
            ) : (
                <Rate {...{ allowHalf, disabled }} />
            )}
        </div>
    );
}

export default Stars;
