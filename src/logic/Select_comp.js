import React, { useState } from 'react';

const Select_comp= () =>{
  const [select,setSelect] = useState("text");
  const options = {
    'report':['getReports','createReport','getReport','cancelReport','getReportSchedules','createReportSchedule','getReportSchedule','cancelReportSchedule','getReportDocument'],
    'feed':['getFeeds','createFeed','getFeed','cancelFeed','createFeedDocument','getFeedDocument'],
    'fullfilment':['getFeeds','createFeed','getFeed','cancelFeed','createFeedDocument','getFeedDocument'],
    'Order':['getFeeds','createFeed','getFeed','cancelFeed','createFeedDocument','getFeedDocument'],
    'product':['getFeeds','createFeed','getFeed','cancelFeed','createFeedDocument','getFeedDocument'],
    'recomendation':['getFeeds','createFeed','getFeed','cancelFeed','createFeedDocument','getFeedDocument'],
    'seler':['getFeeds','createFeed','getFeed','cancelFeed','createFeedDocument','getFeedDocument']
  }
  return 

      <div>
        <div className='mt-5'>
            <div className='row'>
                    <div className='col-4'>
                        <div className="card  mb-3" style={{ maxWidth: "118rem" }}>
                            <div className="card-header bg-primary text-light"><center><b>API Selection</b></center></div>
                             <select onChange={(e)=>{
                                  setSelect(e.target.value)
                                }}>
                                  <option value={'feed'}>Feed</option>
                                  <option value={'report'}>Report</option>
                                  <option value={'fullfilment'}>Fullfilment</option>
                                  <option value={'Order'}>Order</option>
                                  <option value={'product'}>product</option>
                                  <option value={'recomendation'}>Recomendation</option>
                                  <option value={'seler'}>Seler</option>
                                </select>
                                <select onChange={(e)=>{
                                  console.log(e.target.value)
                                }}>
                                {
                              options[select].map((item,idx)=><option key={idx} value={item}>{item}</option>)
                                }
                              </select>
                        </div>
                    </div>
                    <div className='col-8'>
                        <div className="card text-center">
                            <div className="card-header">
                                <ul className="nav nav-tabs card-header-tabs">
                                <li className="nav-item">
                                    <a className="nav-link active" aria-current="true" href="#">
                                    Responce
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="#">
                                    Request Detail
                                    </a>
                                </li>
                                </ul>
                            </div>
                            <div className="card-body">
                            <div className="card-header bg-primary text-light"><center><b>HTTP POST</b></center></div>
                          
                            
                            
                            <div className="card-header bg-primary text-light mt-2"><center><b>String to sign</b></center></div>
                            No request has been submitted.

                               
                            </div>
                        </div>

                    </div>
            </div>
        </div>



      </div>




 

}


export default Select_comp

// const [MultiInput, setuserInput] = useState(
//   {
//       api_select: "",
//       operation:"",
//       refreshtoken:"",
//       marketpalce:"",
//       region:"",

//   });
//   const [colData,setColData]=useState('No request has been submitted.');
//   const [record,setRecord] = useState([]);
//   const handleInput = (e)=>{
//       const name = e.target.name;
//       setuserInput({...MultiInput,[name] : e.target.value});

//   }
//   const handleResponce = (e)=>{

//       e.preventDefault();
//       const newrecord = {...MultiInput,id : new Date().getTime().toString()};
//       var requestOptions = {
//       method: 'POST',
//       body: JSON.stringify(newrecord),
//       headers: {
//           'Content-Type': 'application/json',
//           'Authorization' : "eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjJjYzA4YmZiYTY0ZjA5N2Q1MDNiMGI5Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjkxMDUzNTExLCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYyZWEzYTQ3OWY5Njg3ZDU2ZTA4YThhMiJ9.l1HeBiYmDCXbRtZMIsEEUTTJuXhZdM3sSY4IrLlniNBirgszYAfUSeCIy-JZpHl7kFlTgsLvytgZ7VOEWEuyUQun6aL37rKY53QpcaO3aOkM8xO0nEshsO_JNUBoFzMEmBRAZsc_7mLXtOd_mj0F57dM6oLkZrsQqtG_chKXI_QG4D1mXlDeq6dQ5PLAsqJq5WICRVsd3p7Sx_TJdZ2Qy1G1_eKMhckp9TpRqZNhO_MdrHnOftlufwmNAyvpoLVy9BYVNvDAQL38Da7rnQfI5Cuvz5h2nbNyaC3Qc7_i61A9QvPgM6gk4bE42lWqztsWtIylns_8OSLA3iJMmOWZHQ"
//         },
//       };

//       fetch("http://home.local.cedcommerce.com/amazon/spapi/spapidata", requestOptions).then(response=>response.json()).then(response => {
//               if (response.success) {
//                   console.log('aya',response['data']['data']['nextToken']);
//                   setColData([response['data']['data']['nextToken']])
//               }
//           }).catch(err => console.error(err));
//       setuserInput({api_select: "",refreshtoken:'',marketpalce:'',region:'',api_select: "",
//       operation:""});

//   }

// return (
//   <div>
//       <div className='mt-5'>
//           <div className='row'>
//                   <div className='col-4'>
//                       <div className="card  mb-3" style={{ maxWidth: "118rem" }}>
//                           <div className="card-header bg-primary text-light"><center><b>API Selection</b></center></div>
//                           <form >
//                               <p className="card-text mt-2"> 
                                  
//                                   <label for="cars">Api Selection :</label>
//                                   <select className='mx-5' name="api_select"  onChange={handleInput} aria-label="Default select example">
//                                   <option  value="Feed">Feed</option>
//                                   <option  value="report">Report</option>
//                                   <option  value="Fullfilment">Fullfilment</option>
//                                   <option  value="Fullfilment">Fullfilment</option>
//                                   <option  value="Order">Order</option>
//                                   <option  value="product">product</option>
//                                   <option  value="Recomendation">Recomendation</option>
//                                   <option  value="Seler">Seler</option>
//                                   {/* <option value="3">Seler</option>
//                                   <option value="3">Seler</option> */}
//                                   </select>
//                               </p>
//                               <p className="card-text mt-2"> 
                                  
//                                   <label for="cars">&nbsp;&nbsp;Operation :</label>
//                                   <select className='mx-5'name="operation" onChange={handleInput} aria-label="Default select example">
//                                   <option selected>Open this select menu</option>
//                                   <option value="Feed">Feed</option>
//                                   <option value="Report">Report</option>
//                                   <option value="Fullfilment">Fullfilment</option>
//                                   <option value="Order">Order</option>
//                                   <option value="3">product</option>
//                                   <option value="3">Recomendation</option>
//                                   <option value="3">Seler</option>
//                                   <option value="3">Seler</option>
//                                   <option value="3">Seler</option>
//                                   </select>
//                               </p>
//                               <div className="card-header bg-primary text-light"><center><b>Authentication</b></center></div>

//                               <div className="card-body">
//                                   <p className="card-text ">
//                               Refresh Token : &nbsp;&nbsp;<input type="text" value={MultiInput.refreshtoken} onChange={handleInput} name="refreshtoken" class="form-control"/><br/>
//                               Market Place Id: : &nbsp;&nbsp;<input type="text" value={MultiInput.marketpalce} onChange={handleInput} name="marketpalce" class="form-control"/><br/>
//                               Region: &nbsp;&nbsp;<input type="text" name="region" value={MultiInput.region} onChange={handleInput} class="form-control"/><br/>
//                               {/* Secret Key:: &nbsp;&nbsp;<input type="text" name="selerid" class="form-control"/><br/> */}
//                                   </p>
//                               </div>
//                               <div className='text-center'>
//                                   <button type='submit' className='btn btn-primary btn-lg mb-2'>Required API Parameters</button><br/>
//                                   <button className='btn btn-primary btn-lg mb-2'>Optional API Parameters</button><br/>
//                                   <button onClick={handleResponce}>Submit</button>
//                               </div>
//                           </form>
//                       </div>
//                   </div>
//                   <div className='col-8'>
//                       <div className="card text-center">
//                           <div className="card-header">
//                               <ul className="nav nav-tabs card-header-tabs">
//                               <li className="nav-item">
//                                   <a className="nav-link active" aria-current="true" href="#">
//                                   Responce
//                                   </a>
//                               </li>
//                               <li className="nav-item">
//                                   <a className="nav-link" href="#">
//                                   Request Detail
//                                   </a>
//                               </li>
//                               </ul>
//                           </div>
//                           <div className="card-body">
//                           <div className="card-header bg-primary text-light"><center><b>HTTP POST</b></center></div>
//                           {colData}
                          
                          
//                           <div className="card-header bg-primary text-light mt-2"><center><b>String to sign</b></center></div>
//                           No request has been submitted.

                             
//                           </div>
//                       </div>

//                   </div>
//           </div>
//       </div>



//   </div>
// )
// }
