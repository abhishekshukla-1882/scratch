import React, { useEffect } from 'react';
import Form from '../component/form';
import { useState } from 'react';
const GetReportDoc = ({props,api_select,operation}) =>{
    const [MultiInput, setuserInput] = useState(
        {
            api_select: api_select,
            operation: operation,
            refreshtoken: "",
            marketpalce: "",
            region: "",
            reportDocumentId:""

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

                console.log('aya', response['data']['data']);
                setTest(response['data']);
                setColData(response['data'])

            }
            // setState
        }).catch(err => console.error(err));
        // setuserInput({api_select: "",refreshtoken:'',marketpalce:'',region:'',api_select: "",
        // operation:""});
    }

    useEffect(() => {
        console.log("Printing test data ", test);
        props(test);
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
                 {/* getReportDoc */}
                    Refresh Token : &nbsp;&nbsp;<input type="text" value={MultiInput.refreshtoken}  name="refreshtoken" onChange={handleInput} class="form-control"/><br/>
                    Market Place Id: : &nbsp;&nbsp;<input type="text" value={MultiInput.marketpalce}  name="marketpalce" onChange={handleInput} class="form-control"/><br/>
                    Region: &nbsp;&nbsp;<input type="text" name="region" value={MultiInput.region} onChange={handleInput} class="form-control"/><br/>
                    Report Document Id : &nbsp;&nbsp;<input type="text" value={MultiInput.reportDocumentId}  name="reportDocumentId" onChange={handleInput} class="form-control"/><br/>
                
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
export default GetReportDoc






              