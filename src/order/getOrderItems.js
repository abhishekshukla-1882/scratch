import React, { useEffect } from 'react'
import Form from '../component/form';
import { useState } from 'react';
const GetOrderItems = ({props,api_select,operation}) => {
    // <Form data={'no data'} />
    const [MultiInput, setuserInput] = useState(
        {
            api_select: api_select,
            operation: operation,
            refreshtoken: "",
            marketpalce: "",
            region: "",
            type: "",
            orderId:""

        });
    const [colData, setColData] = useState('');
    const [record, setRecord] = useState([]);
    const [test, setTest] = useState([]);
    const handleInput = (e) => {
        const name = e.target.name;
        console.log(e.target.value);
        setuserInput({ ...MultiInput, [name]: e.target.value });

    }
    const handleResponce = (e) => {

        e.preventDefault();
        const newrecord = { ...MultiInput, id: new Date().getTime().toString() };
        var requestOptions = {
            method: 'POST',
            body: JSON.stringify(newrecord),
            headers: {
                'Content-Type': 'application/json',
                'Authorization': "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjJjYzA4YmZiYTY0ZjA5N2Q1MDNiMGI5Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjkyMTgxMzUzLCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYyZmI2ZmU5MDBjZjc5Y2M0NzA5N2ExMiJ9.HSk-HNaBeOEZezRCM7UFsQFp7JSF_iCPXbmqL2bnPogtzo1rJakLiH81_C7H9BIf_Tyf_RdNcJXrShmJAHdbRLhUpZL71OkgM9O117mdP9RXbDqzlVx5XBQaP54rhvwRnTdmTkVbgELlOVJVptDq2hWZL6CUW4YLAj7iNm1DrfTb-KMwB4hELOTQa2Y3Lmobal8Nd7WlVL6E1ekFB5qH7m41qnwbi1pwd2sWjOICGuHzpCWbV1Qgi-nwGEQIg8ZmsMgqFxr1TCvgqb50M6Zvs4F0_IUZiyhfvuurU7ySnM81Ys7L6gI9p9KIbaIvPHh27Ji6oMSjVJ-8ltsveW5WvA"
            },
        };

        fetch("http://home.local.cedcommerce.com/amazon/spapi/getData", requestOptions).then(response => response.json()).then(response => {
            if (response.success) {

                console.log('aya', response['data']);
                setTest(response['data']['data']['payload']);
                setColData(response['data'])
            }
        }).catch(err => console.error(err));
        // setuserInput({api_select: "",refreshtoken:'',marketpalce:'',region:'',api_select: "",
        // operation:""});
    }

    useEffect(() => {
        console.log("Printing test data ", test);
        props(test);
        // <Form props={test} />
    }, [test]);

    const [forrm, setForrm] = useState("")
    const handlesuboption = (e) => {
        console.log('yes');
        console.log(e.target.value);

        setForrm(e.target.value)
    }
    const handlesubmit = () => {
        console.log('done');
    }
    return (
        <>
            <div className="card-header bg-primary text-light"><center><b>Authentication</b></center></div>

            <div className="card-body">
                <p className="card-text ">
                    <b>Type</b>
                    <select className='mx-5' name="type" aria-label="Default select example">
                        <option value="GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT">GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT</option>
                        <option value="GET_BRAND_ANALYTICS_MARKET_BASKET_REPORT">GET_BRAND_ANALYTICS_MARKET_BASKET_REPORT</option>
                        <option value="GET_BRAND_ANALYTICS_REPEAT_PURCHASE_REPORT">GET_BRAND_ANALYTICS_REPEAT_PURCHASE_REPORT</option>
                        <option value="GET_MERCHANT_LISTINGS_ALL_DATA" selected>GET_MERCHANT_LISTINGS_ALL_DATA</option>
                    </select>
                    Refresh Token : &nbsp;&nbsp;<input type="text" value={MultiInput.refreshtoken} name="refreshtoken" onChange={handleInput} class="form-control" /><br />
                    Market Place Id: : &nbsp;&nbsp;<input type="text" value={MultiInput.marketpalce} name="marketpalce" onChange={handleInput} class="form-control" /><br />
                    Region: &nbsp;&nbsp;<input type="text" name="region" value={MultiInput.region} onChange={handleInput} class="form-control" /><br />
                    Order Id: &nbsp;&nbsp;<input type="text" name="orderId" value={MultiInput.orderId} onChange={handleInput} class="form-control" /><br />
                    <b>Type</b>
                    <select className='mx-5' name="type" value={MultiInput.type}  onChange={handleInput}aria-label="Default select example">
                        <option value="GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT" >GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT</option>
                        <option value="GET_BRAND_ANALYTICS_MARKET_BASKET_REPORT">GET_BRAND_ANALYTICS_MARKET_BASKET_REPORT</option>
                        <option value="GET_BRAND_ANALYTICS_REPEAT_PURCHASE_REPORT">GET_BRAND_ANALYTICS_REPEAT_PURCHASE_REPORT</option>
                        <option value="GET_MERCHANT_LISTINGS_ALL_DATA">GET_MERCHANT_LISTINGS_ALL_DATA</option>
                    </select>
                    {/* Secret Key:: &nbsp;&nbsp;<input type="text" name="selerid" class="form-control"/><br/> */}
                </p>
            </div>
            <div className='text-center'>
                <button type='submit' className='btn btn-primary btn-lg mb-2'>Required API Parameters</button><br />
                <button className='btn btn-primary btn-lg mb-2'>Optional API Parameters</button><br />
                <button onClick={handleResponce}>Submit</button>
            </div>
            {/* <Form props={test} /> */}

        </>
    )
}
export default GetOrderItems







