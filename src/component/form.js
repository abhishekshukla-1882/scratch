import React, { useEffect } from 'react'
import $ from "jquery";
import { Card, Heading, Layout, Scrollable } from '@shopify/polaris';
import { useState } from "react";
import GetReports from '../logic/GetReports'
import GetReport from '../logic/GetReport';
import getReportDoc from '../logic/GetReportDoc';
import CreateReport from '../logic/CreateReport';
import GetReportDoc from '../logic/GetReportDoc';
import GetReportSchedules from '../logic/GetReportSchedules';
import CreateReportSchedule from '../logic/CreateReportSchedule';
import GetFeed from '../Feed/GetFeed';
import GetFeeds from '../Feed/GetFeeds';
import CreateFeed from '../Feed/CreateFeed';
import CreateFeedDocument from '../Feed/createFeedDocument';
import GetFeedDocument from '../Feed/getFeedDocument';
import Getnotification from '../Notification/getnotification';
import GetOrderItemsBuyerInfo from '../order/getOrderItemsBuyerInfo';
import GetOrders from '../order/getOrders';
import GetOrder from '../order/getOrder';
import GetBuyerInfo from '../order/getBuyerInfo';
import GetOrderAddress from '../order/getOrderAddress';
import GetOrderItems from '../order/getOrderItems';
import { type } from '@testing-library/user-event/dist/type';
import ShowJson from './ShowJson';
const Form = () => {
  const [apiData, setApiData] = useState([]);
  const [select, setSelect] = useState("report");
  const [container, setContainer] = useState({});
  const options = {
    'report': ['getReports','createReport', 'getReport', 'getReportDoc'],
    'feed': ['getFeeds', 'createFeed', 'getFeed', 'createFeedDocument', 'getFeedDocument'],
    'order': ['getOrders', 'getOrder', 'getOrderItemsBuyerInfo', 'getBuyerInfo', 'getOrderAddress', 'getOrderItems', 'getOrderItemsBuyerInfo', 'updateShipmentStatus', 'getOrderRegulatedInfo', 'updateVerificationStatus'],
    'Notification': ['Getnotification', 'CreateNotification'],
    //   'recomendation':['getFeeds','createFeed','getFeed','cancelFeed','createFeedDocument','getFeedDocument'],
    'seler': ['getMarketplaceParticipations']
  }
  const [url,setUrl] = useState("https://amazon.demo.sellernext.com/home/public/")
  const[bearer,setBearer] = useState("eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJ1c2VyX2lkIjoiNjJjYzA4YmZiYTY0ZjA5N2Q1MDNiMGI5Iiwicm9sZSI6ImFkbWluIiwiZXhwIjoxNjkyMTgxMzUzLCJpc3MiOiJodHRwczpcL1wvYXBwcy5jZWRjb21tZXJjZS5jb20iLCJ0b2tlbl9pZCI6IjYyZmI2ZmU5MDBjZjc5Y2M0NzA5N2ExMiJ9.HSk-HNaBeOEZezRCM7UFsQFp7JSF_iCPXbmqL2bnPogtzo1rJakLiH81_C7H9BIf_Tyf_RdNcJXrShmJAHdbRLhUpZL71OkgM9O117mdP9RXbDqzlVx5XBQaP54rhvwRnTdmTkVbgELlOVJVptDq2hWZL6CUW4YLAj7iNm1DrfTb-KMwB4hELOTQa2Y3Lmobal8Nd7WlVL6E1ekFB5qH7m41qnwbi1pwd2sWjOICGuHzpCWbV1Qgi-nwGEQIg8ZmsMgqFxr1TCvgqb50M6Zvs4F0_IUZiyhfvuurU7ySnM81Ys7L6gI9p9KIbaIvPHh27Ji6oMSjVJ-8ltsveW5WvA")
  // setUrl('http://home.local.cedcommerce.com/amazon/spapi/getData');
  // setUrl("");
  const [MultiInput, setuserInput] = useState(
    {
      api_select: "",
      operation: "",
      refreshtoken: "",
      marketpalce: "",
      region: "",

    });


  const handleInput = (e) => {
    const name = e.target.name;
    setuserInput({ ...MultiInput, [name]: e.target.value });

  }
  const [forrm, setForrm] = useState("getReports")
  const handlesuboption = (e) => {
    console.log('yes');
    console.log(e.target.value);
    setForrm(e.target.value)
  }
  const handlesubmit = () => {
    console.log('done');
  }


  useEffect(() => {
  }, [apiData]);

  useEffect(()=>{},[select]);
// useEffect(()=>[url]);


  return (

    <div>
      <div className='mt-5'>
        <div className='row'>
          <div className='col-4'>
            <form onSubmit={handlesubmit}>
              <div className="card  mb-3" style={{ maxWidth: "118rem" }}>
                <div className="card-header bg-primary text-light"><center><b>API Selection</b></center></div>
                <div>
                  <p className="card-text mt-2">
                    <label for="cars">Api Selection :&nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <select
                      onChange={(e) => {
                        setSelect(e.target.value)
                      }}
                    >
                      <option value={"feed"} >Feed</option>
                      <option value={"report"} selected>Report</option>
                      <option value={"order"}>Order</option>
                      <option value={"product"}>product</option>
                      <option value={"seler"}>Seler</option>
                      <option value={"Notification"}>Notification</option>
                    </select>
                  </p>
                  <p className="card-text mt-2">
                    <label for="cars">&nbsp;&nbsp;Operation : &nbsp;&nbsp;&nbsp;&nbsp;</label>
                    <select onChange={handlesuboption}>


                      {options[select].map((item, idx) => <option value={item} >
                        {item}
                      </option>)}


                    </select>
                  </p>
                </div>
              </div>
              {/* Report form Tags  */}
              {forrm === 'getReports' && <GetReports props={setApiData} api_select={select} operation={forrm}  />}
              {forrm === 'getReportDoc' && <GetReportDoc props={setApiData} api_select={select} operation={forrm} />}
              {forrm === 'getReport' && <GetReport props={setApiData} api_select={select} operation={forrm}/>}
              {forrm === 'getReportSchedules' && <GetReportSchedules props={setApiData} api_select={select} operation={forrm} />}
              {forrm === 'createReportSchedule' && <CreateReportSchedule props={setApiData} api_select={select} operation={forrm} />}
              {forrm === 'createReport' && <CreateReport props={setApiData} api_select={select} operation={forrm} />}
              {/* Feed form Tag */}
              {forrm === 'getFeed' && <GetFeed props={setApiData} api_select={select} operation={forrm}/>}
              {forrm === 'getFeeds' && <GetFeeds props={setApiData} api_select={select} operation={forrm}/>}
              {forrm === 'createFeed' && <CreateFeed props={setApiData} api_select={select} operation={forrm}/>}
              {forrm === 'createFeedDocument' && <CreateFeedDocument props={setApiData} api_select={select} operation={forrm} />}
              {forrm === 'getFeedDocument' && <GetFeedDocument props={setApiData} api_select={select} operation={forrm}/>}
              {/* feed end */}

              {/* Notification  */}
              {forrm === 'Getnotification' && <Getnotification />}
              {/* <button type='submit'>Submit</button> */}
              {/* Orders  */}
              {forrm === 'getOrderItemsBuyerInfo' && <GetOrderItemsBuyerInfo props={setApiData} api_select={select} operation={forrm} />}
              {forrm === 'getBuyerInfo' && <GetBuyerInfo props={setApiData} api_select={select} operation={forrm} />}
              {forrm === 'getOrder' && <GetOrder props={setApiData} api_select={select} operation={forrm} />}
              {forrm === 'getOrders' && <GetOrders props={setApiData} api_select={select} operation={forrm} />}
              {forrm === 'getOrderAddress' && <GetOrderAddress props={setApiData} api_select={select} operation={forrm} />}
              {forrm === 'getOrderItems' && <GetOrderItems props={setApiData} api_select={select} operation={forrm} />}
              {/* {forrm === 'getOrderBuyerInfo' && <GetOrderItemsBuyerInfo props={setApiData} />} */}



            </form>
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

                      {<ShowJson data={apiData}/>}
              


              </div>
            </div>
          </div>
        </div>
      </div>

      <footer>
      </footer>

    </div>
  )
}

export default Form