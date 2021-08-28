
import React, { useState,useEffect } from "react";
import styled from 'styled-components';
import Wlvl from '../component/wlvl';
global.fetch = require("node-fetch");

const Datastyle = styled.div`

.valueData{
    display:flex;
    justify-content:center;
    align-items:center;
   position:relative;
   left:5px;
   top:-150px;
   border:2px solid black;
   border-radius : 5px;
   width:350px;
   height:20px;
   color:rgb(43, 40, 2);
   font-size: large;
   font-weight: bold;
 }
.basket{
    position:relative;
    top:-150px;
    height:450px;
    width:350px;
    background-color: transperant;
    border-radius:9px;
    border-bottom: 5px solid black;
    border-left: 5px solid black;
    border-right: 5px solid black;
    display:flex;
    flex-direction: column;
    justify-content: flex-end;
    transition:1s;
    
}
.dataBtn {
     border-top:7px solid rgb(26, 14, 14);
     border-bottom:7px solid rgb(26, 14, 14);
     border-left:47px solid rgb(26, 14, 14);
     border-right:47px solid rgb(26, 14, 14);
     background-color:  rgb(43, 40, 2);
     font-size: large;
     font-weight: bold;
     color:rgb(14, 128, 126);
    
     height:50px;
     width:360px;
     position:relative;
     top:420px;
     border-radius:9px;
     transition:0.5s;
    
    }
    .dataBtn:hover{
        cursor: pointer;
        color:rgb(188, 162, 56);
        border:6px solid rgb(188, 162, 56);
        
    }

{width:340px;
    height:580px;

   }
   @media only screen and (max-width:1030px){
    {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        .basket{
            height:600px;
            width:550px;
            position:relative;
            top:-70px;
            left:125px;
        }
        .dataBtn {
            height:100px;
            width:355px;
            position:relative;
            top:712px;
            left:125px;
            border-radius:9px;
            transition:0.2s;
            
        }
       
       

        .valueData{
            padding:10px;
           display:flex;
           justify-content:center;
          position:relative;
          left:120px;
          top:-200px;
          border:2px solid black;
          border-radius : 5px;
          width:380px;
          height:20px;
          color:rgb(43, 40, 2);
          font-size: large;
          font-weight: bold;
        }

    }

   
   @media only screen and (max-width:800px){
    {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        .basket{
            height:550px;
            width:350px;
            position:relative;
            top:-70px;
            left:125px;
        }
        .dataBtn {
            height:50px;
            width:355px;
            position:relative;
            top:512px;
            left:125px;
            border-radius:9px;
            
        }
        .valueData{
            padding:10px;
           display:flex;
           justify-content:center;
          position:relative;
          left:120px;
          top:-90px;
          border:2px solid black;
          border-radius : 5px;
          width:380px;
          height:20px;
          color:rgb(43, 40, 2);
          font-size: large;
          font-weight: bold;
        }

    }

   @media only screen and (max-width:420px){
    {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        .basket{
            height:350px;
            width:250px;
            position:relative;
            top:-70px;
            left:125px;
        }
        .dataBtn {
            height:50px;
            width:255px;
            position:relative;
            top:408px;
            left:125px;
            border-radius:9px;
            
        }
        .valueData{
            padding:10px;
           display:flex;
           justify-content:center;
          position:relative;
          left:120px;
          top:-90px;
          border:2px solid black;
          border-radius : 5px;
          width:280px;
          height:20px;
          color:rgb(43, 40, 2);
          font-size: large;
          font-weight: bold;
        }

    }

    @media only screen and (max-width:330px){
        {
            display:flex;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            .basket{
                height:350px;
                width:250px;
                position:relative;
                top:-70px;
                left:125px;
            }
            .dataBtn {
                height:50px;
                width:255px;
                position:relative;
                top:416px;
                left:125px;
                border-radius:9px;
                
            }
            .valueData{
                padding:10px;
               display:flex;
               justify-content:center;
              position:relative;
              left:120px;
              top:-90px;
              border:2px solid black;
              border-radius : 5px;
              width:280px;
              height:20px;
              color:rgb(43, 40, 2);
              font-size: large;
              font-weight: bold;
            }
    
        }



@media only screen and (max-width:330px){
    {
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        .basket{
            height:350px;
            width:250px;
            position:relative;
            top:-70px;
            left:125px;
        }
        .dataBtn {
            height:50px;
            width:255px;
            position:relative;
            top:416px;
            left:125px;
            border-radius:9px;
            
        }
        .valueData{
            padding:10px;
           display:flex;
           justify-content:center;
          position:relative;
          left:120px;
          top:-90px;
          border:2px solid black;
          border-radius : 5px;
          width:280px;
          height:20px;
          color:rgb(43, 40, 2);
          font-size: large;
          font-weight: bold;
        }

    }






`;


const Button = (props) => {
    
    const [data, setData] = useState('click the button to fetch data...');
    
    var  perctData = 100-(0.909)*data;
    if(data>=110){
        console.log('empty');
    }
    else if (data<=110 && data>=8){
       
       console.log({data});
        console.log({perctData});
    }
    else if(data<=8 && data !== "" ){
        perctData = 100;
        console.log({data});
        console.log(perctData);
    }

    else if(data === "" ){
        perctData="wait please";
        console.log("wait please");
    }
    
    const [pic , setPic] = useState(0);
    
    useEffect(()=>{  
      
        setPic(perctData);

},[pic,perctData]);
  
    
    const fetchData = () => {
            
         let i = 0;
         while (i<200) {
         task(i);
         i++;
         }

         function task(i) {
            setTimeout(function() {
           fetch('https://cloud.boltiot.com/remote/af75e60d-1600-4152-872d-ac60f9ad3982/serialRead?deviceName=BOLT8023410&till=10')
                      .then(res => res.json())
                      .then(data => {
                          setData(data.value)
                      }).catch(e => {
                          setData(e.message)
                      });
                console.log(i);
            }, 16000 * i);
          }
        
        
    }
    return (
        <Datastyle>
            <button className="dataBtn" onClick={fetchData} >MONITOR
                {props.label}
            </button>
            <p className="valueData">{data} :- {perctData}%</p>
            {/* <img src={pic} alt="Loading" /> */}
           <div className="basket"> <Wlvl bgcolor={'rgba(173, 137, 36, 0.747)'} perct={pic} />
            </div>
           
        </Datastyle>
    )
}

export default Button;