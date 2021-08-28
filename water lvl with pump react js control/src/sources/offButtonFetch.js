// import React, { useState } from "react";
import styled from 'styled-components';
const Offbtntyle = styled.div`
 
    }
.OffButton{
    height:50px;
    width:170px;
    position:relative;
    top:220px;
    right:335px;
    border-radius:9px;
    border:7px solid rgb(43, 40, 2);
    background-color:transparent;
    color:rgb(43, 40, 2);
    font-size: large;
    font-weight: bold;
    transition:0.5s;
   
}

  .OffButton:hover{
     cursor: pointer;
     background-color:rgb(43, 40, 2); 
     color:white;
    }
@media only screen and (max-width:1030px){
    .OffButton{
        border:7px solid rgb(43, 40, 2);
        background-color:transparent;
        color:rgb(43, 40, 2);
        font-size: large;
        font-weight: bold;
        position:relative;
        top:600px;
        right:200px;
        width:160px;
    }
}

@media only screen and (max-width:800px){
    .OffButton{
        border:7px solid rgb(43, 40, 2);
        background-color:transparent;
        color:rgb(43, 40, 2);
        font-size: large;
        font-weight: bold;
        position:relative;
        top:300px;
        right:200px;
        width:160px;
    }
}

@media only screen and (max-width:420px){
    .OffButton{
        border:7px solid rgb(43, 40, 2);
        background-color:transparent;
        color:rgb(43, 40, 2);
        font-size: large;
        font-weight: bold;
        position:relative;
        top:250px;
        right:170px;
        width:125px;
    }
}
@media only screen and (max-width:380px){
    .OffButton{
        border:7px solid rgb(43, 40, 2);
        background-color:transparent;
        color:rgb(43, 40, 2);
        font-size: large;
        font-weight: bold;
        position:relative;
        top:250px;
        right:150px;
        width:125px;
    }
}
@media only screen and (max-width:350px){
    .OffButton{
        border:7px solid rgb(43, 40, 2);
        background-color:transparent;
        color:rgb(43, 40, 2);
        font-size: large;
        font-weight: bold;
        position:relative;
        top:250px;
        right:150px;
        width:125px;
    }
}
`;
const OffButton = () => {
    

    const fetchoffData = () => {
        fetch('https://cloud.boltiot.com/remote/af75e60d-1600-4152-872d-ac60f9ad3982/digitalWrite?deviceName=BOLT8023410&pin=0&state=HIGH');
        
    }

    
    return (
        <Offbtntyle>
            <button className="OffButton" onClick={fetchoffData}>OFF
            </button>
            {/* <p>{offdata}</p> */}
        </Offbtntyle>
    )
}

export default OffButton;