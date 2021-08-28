// import React, { useState } from "react";
import styled from 'styled-components';
const Onbtntyle = styled.div`
.OnButton{
    height:50px;
    width:180px;
    position:relative;
    top:220px;
    right:340px;
    border-radius:9px;
    border:4px solid rgb(43, 40, 2);
    background-color: rgb(43, 40, 2);
    color:white;
    font-weight: bold;
    font-size: large;
    transition:0.5s;
}
.OnButton:hover{cursor:pointer;
background-color:rgb(7, 108, 110);}
@media only screen and (max-width:1030px){
    .OnButton{
        border:4px solid rgb(43, 40, 2);
        background-color: rgb(43, 40, 2);
        color:white;
        font-weight: bold;
        font-size: large;
        position:relative;
        top:600px;
        right:203px;
        width:160px;
        
  }  
}
@media only screen and (max-width:800px){
    .OnButton{
        border:4px solid rgb(43, 40, 2);
        background-color: rgb(43, 40, 2);
        color:white;
        font-weight: bold;
        font-size: large;
        position:relative;
        top:300px;
        right:203px;
        width:160px;
        
  }  
}

@media only screen and (max-width:420px){
    .OnButton{
        border:4px solid rgb(43, 40, 2);
        background-color: rgb(43, 40, 2);
        color:white;
        font-weight: bold;
        font-size: large;
        position:relative;
        top:250px;
        right:173px;
        width:125px;
        
  }  
}

@media only screen and (max-width:380px){
    .OnButton{
        border:4px solid rgb(43, 40, 2);
        background-color: rgb(43, 40, 2);
        color:white;
        font-weight: bold;
        font-size: large;
        position:relative;
        top:250px;
        right:153px;
        width:125px;
        
  }  
}
@media only screen and (max-width:330px){
    .OnButton{
        border:4px solid rgb(43, 40, 2);
        background-color: rgb(43, 40, 2);
        color:white;
        font-weight: bold;
        font-size: large;
        position:relative;
        top:250px;
        right:153px;
        width:125px;
        
  }  
}
`;

const OnButton = () => {
    // const [ondata, setonData] = useState('click the button to fetch data...')

    const fetchonData = () => {
        fetch('https://cloud.boltiot.com/remote/af75e60d-1600-4152-872d-ac60f9ad3982/digitalWrite?deviceName=BOLT8023410&pin=0&state=LOW')
            // .then(res => res.json())
            // .then(data => {
            //     setonData(data.value)
            // }).catch(e => {
            //     setonData(e.message)
            // })
            ;
        
        
    }

    
    return (
        <Onbtntyle>
            <button className="OnButton" onClick={fetchonData}>
                ON
            </button>
            {/* <p>{ondata}</p> */}
        </Onbtntyle>
    )
}

export default OnButton;