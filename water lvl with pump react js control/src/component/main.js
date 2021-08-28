import React from 'react';
import Button from '../sources/datafetch';
import styled from 'styled-components';
import OnButton from '../sources/onButtonFetch';
import OffButton from '../sources/offButtonFetch';
const Container = styled.div`




@media only screen and (max-width:800px){
      {
      width:770px;
      height:1024px;
      }
    } 

  


    @media only screen and (max-width:380px){
    {width:375px;
     height:812px;
   }
}


@media only screen and (max-width:350px){
    {width:375px;
        height:667px;
      }
    
    }

    max-width:1920px;
    max-height:1080px;
    width:1600px;
    height:900px;
    display:flex;
    justify-content:center;
    align-items:center;
    
    margin:0 auto;
    background-color:rgb(7, 108, 110);
    


    
  




`;


let message ;
export default function Main() {
    

    return (
        <Container>
            <h1>{message}</h1>
            <Button />
           <OnButton />
           <OffButton />
        </Container>
    )
}
