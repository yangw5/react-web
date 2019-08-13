import React, { useState, useEffect, useRef } from 'react';
import FromSearch from '../widget/FromSearch';
import { Button } from 'antd';
import { numberFilter as valueFilter } from '../../utils';
import CaseForm from './CaseForm';

const CaseShowList = () => {
    const [events, setEvents] = useState([]);

    const modalFormRef = useRef(null);
    let [count, setCount] = useState(0);
    const prevCountRef = useRef();

    useEffect(() => {
        console.log('inside:' + count);
        prevCountRef.current = count;
    });
    const prevCount = prevCountRef.current;
    console.log('outside:' + count);
    //useEffect(()=>{},[])
    //    useEffect(() => {
    //        console.log('请求数据');
    //        setLoading(true);
    //        calendarMusicSearch({
    //            year: moment(date).year(),
    //            month: moment(date).month() + 1,
    //        }).then(res => {
    //            setEvents(res.data);
    //            setLoading(false);
    //        });
    //    }, [date]);
    //    useEffect(() => {
    //        calendarMusicEvents().then(res => setEventTypes(res.data));
    //    }, []);
    const searchItem = [
        {
            label: '案例ID',
            field: 'caseId',
            type: 'input',
            valueFilter,
            // valueFilter: value => valueFilter(value, REGEX_COPYRIGHTID),
        },
        {
            label: '案例名称',
            field: 'caseName',
            type: 'input',
        },
        {
            label: '技术名称',
            field: 'tnName',
            type: 'input',
        },
        {
            label: '作者',
            field: 'author',
            type: 'input',
        },
        {
            label: '状态',
            field: 'status',
            type: 'input',
        },
        {
            label: '时间',
            field: 'time',
            type: 'input',
        },
        {
            label: '标签',
            field: 'tags',
            type: 'input',
        },
    ];
    const onOk = () => {
        // calendarMusicSearch({
        //     year: moment(date).year(),
        //     month: moment(date).month() + 1,
        // }).then(res => setEvents(res.data));
    };
    return (
        <div>
            {/* <FromSearch
                wrappedComponentRef={form => (this.form = form)}
                {...{
                    searchItem,
                }}
            /> */}
            <Button onClick={() => modalFormRef.current._open()}>新建</Button>
            <CaseForm wrappedComponentRef={modalFormRef} {...{ onOk }} />
            <Button
                onClick={() => {
                    let a = count++;
                    setCount(a);
                }}
            >
                count++
            </Button>
            <p>{`value:${count},prevCount:${prevCount}`}</p>
        </div>
    );
};

export default CaseShowList;
