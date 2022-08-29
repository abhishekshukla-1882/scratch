import { useEffect } from 'react';
import Form from '../component/form';
import { useState } from 'react';
const GetFeed = ({props,api_select,operation}) =>{
const [MultiInput, setuserInput] = useState(
    {
        api_select: api_select,
        operation: operation,
        refreshtoken:"",
        marketpalce:"",
        region:"",
        FeedId:"",
        type:""
    
    });
    const [colData,setColData]=useState('No request has been submitted.');
    const [test, setTest] = useState([]);
    const [record,setRecord] = useState([]);
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
            'Authorization':localStorage.getItem("bearer")??""

            // 'Authorization' : "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjJjYzA4YmZiYTY0ZjA5N2Q1MDNiMGI5Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjkzMDU0ODk5LCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYzMDhjNDMzZjY3Mjg4NmNmZTA4MzAzMiJ9.ZLDfSQMbijdAyDd2UTY7dzVKSEQyHShSd56y08XTgIBt67gOlIPsAjH5aaoggCRWJp1ptz4Q9oq8jyjDECs2LrMauQrpNnIV1-fHhVryXrGcFv7J065YwsVPmyggk9n4dEi4fjJDd7LEfjsE86LqGOHs_1mzU7x5rMrDZgUMiZGrEhYCNsGoYdvJpByd08GX_QFen_NXM9Ia6RLL8SDlPrlprXry-r1478RGv0L3oGaOQlpl-jESPa740PdvhPu0QAKpTk3VI75bOGfjF3U7nKuTLHvnGI7QyEnWJ3FhQ_6T-1GiHjoAG-Kh69EpMDptrsXckNLcwzdTRj50DlYWBw"
            },
        };
        let url = localStorage.getItem("base_url");
    
        fetch(url, requestOptions).then(response=>response.json()).then(response => {
                if (response.success) {
                    console.log('aya',response['data']);
                    setTest([response['data']])
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
             Feed Id: &nbsp;&nbsp;<input type="text" name="FeedId" value={MultiInput.FeedId} onChange={handleInput} class="form-control"/><br/>
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
             <div className ='text-center'>
                 <button type='submit' className='btn btn-primary btn-lg mb-2'>Required API Parameters</button><br/>
                 <button className='btn btn-primary btn-lg mb-2'>Optional API Parameters</button><br/>
                 <button onClick={handleResponce}>Submit</button>
     
             </div>
         </>
       )
    }
export default GetFeed