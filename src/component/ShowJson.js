import { Scrollable } from '@shopify/polaris'
import React, { useEffect, useMemo, useState } from 'react'
import ReactJson from 'react-json-view'

const ShowJson = ({data}) => {
    
    const showJsonData = useMemo(()=>data,[data]);
    // useEffect(()=>{
    //     console.log("in Show Json",data)
    // },[data])
  return (
    <Scrollable shadow style={{ height: '500px' }} focusable><ReactJson src={showJsonData} /></Scrollable>
  )
}

export default ShowJson