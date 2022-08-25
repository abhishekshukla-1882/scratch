import { useEffect } from 'react';
import Form from '../component/form';
import { useState } from 'react';
const CreateReportSchedule = ({props,api_select,operation}) =>{
const [MultiInput, setuserInput] = useState(
    {
        api_select: api_select,
        operation: operation,
        refreshtoken:"",
        marketpalce:"",
        region:"",
        period:"",
        type:""
    
    });
    const [colData,setColData]=useState('No request has been submitted.');
    const [record,setRecord] = useState([]);
    const [test, setTest] = useState([]);
    const handleInput = (e)=>{
        const name = e.target.name;
        console.log(e.target.value);
        setuserInput({...MultiInput,[name] : e.target.value});
    
    }
    const handleResponce = (e)=>{
    
        e.preventDefault();
        const newrecord = {...MultiInput,id : new Date().getTime().toString()};
        // console.log(newrecord);
        var requestOptions = {
        method: 'POST',
        body: JSON.stringify(newrecord),
        headers: {
            'Content-Type': 'application/json',
            'Authorization' : "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjJjYzA4YmZiYTY0ZjA5N2Q1MDNiMGI5Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjkxNjU5NjA1LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYyZjM3OWQ1ZmE0NGYyNDQxNzAzMTc3MiJ9.BDxDs0e6D2cn5ZMzog4IASXEhFyYGu-yoP9McciGNlmmHq3jlJ-nhlg7INYDFbRnkdQJHiGc1kbiqvgpXPTQ3WsrW5RzP8D8CStHwXFvJ5kLs1nnoFWB0TknfwZ8xaBZxyTRZCJGxTHfUgb1D2jNPlgXWdwYjb0RVOVbg9GtT-s5AxzxLxzT2MHVBJxddbwHwwbkPha7bqWEQMiEnE_JyB38eQwk5Nrc3s91B9In0Wx_dZTBOkWW2f2N6gpmxafiUdUZKMFTGgAKNJhGKX6A20vIqUqure_FyTZoUSL1hcxejzXE9z06T3pAtVOEfY6ljqzg25xZKprZNT9hjbRe2A"
            },
        };
    
        fetch("http://home.local.cedcommerce.com/amazon/spapi/postData", requestOptions).then(response=>response.json()).then(response => {
                if (response.success) {
                    console.log('aya',response['data']);
                    setTest(response['data']['data']['payload']);
                    setColData([response['data']])
                }
            }).catch(err => console.error(err));
        // setuserInput({api_select: "",refreshtoken:'',marketpalce:'',region:'',api_select: "",
        // operation:""});
    
    }
    
    const [forrm , setForrm] = useState("")
    const handlesuboption = (e)=>{
        console.log('yes');
        console.log(e.target.value);
        
            setForrm(e.target.value)
    }
    const handlesubmit = ()=>{
    console.log('done');
    }
    useEffect(() => {
        console.log("Printing test data ", test);
        props(test);
        // <Form props={test} />
    }, [test]);
    return (
        <>
          <div className="card-header bg-primary text-light"><center><b>Authentication</b></center></div>
     
             <div className="card-body">
                 <p className="card-text ">
             Refresh Token : &nbsp;&nbsp;<input type="text" value={MultiInput.refreshtoken}  name="refreshtoken" onChange={handleInput} class="form-control"/><br/>
             Market Place Id: : &nbsp;&nbsp;<input type="text" value={MultiInput.marketpalce}  name="marketpalce" onChange={handleInput} class="form-control"/><br/>
             Region: &nbsp;&nbsp;<input type="text" name="region" value={MultiInput.region} onChange={handleInput} class="form-control"/><br/>
             Period: &nbsp;&nbsp;<input type="text" name="period" value={MultiInput.period} onChange={handleInput} class="form-control"/><br/>
             <b>Type</b>
            
             {/* Secret Key:: &nbsp;&nbsp;<input type="text" name="selerid" class="form-control"/><br/> */}
                 </p>
             </div>
             <select className='mx-5' name="type" value={MultiInput.type}  onChange={handleInput}aria-label="Default select example">
                        <option value="GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT" >GET_BRAND_ANALYTICS_SEARCH_TERMS_REPORT</option>
                        <option value="GET_BRAND_ANALYTICS_MARKET_BASKET_REPORT">GET_BRAND_ANALYTICS_MARKET_BASKET_REPORT</option>
                        <option value="GET_BRAND_ANALYTICS_REPEAT_PURCHASE_REPORT">GET_BRAND_ANALYTICS_REPEAT_PURCHASE_REPORT</option>
                        <option value="GET_MERCHANT_LISTINGS_ALL_DATA">GET_MERCHANT_LISTINGS_ALL_DATA</option>
                    </select>
             <div className ='text-center'>
                 <button type='submit' className='btn btn-primary btn-lg mb-2'>Required API Parameters</button><br/>
                 <button className='btn btn-primary btn-lg mb-2'>Optional API Parameters</button><br/>
                 <button onClick={handleResponce}>Submit</button>
     
             </div>
         </>
       )
    }
export default CreateReportSchedule