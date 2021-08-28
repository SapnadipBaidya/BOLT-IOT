import React from 'react';

import styled from 'styled-components';

const Lvl = styled.div`

background-color:${(props)=> props.bgcolor};
border:${(props)=>props.outlineThick} solid ${(props)=>props.outlineColor};
display:flex;

justify-content:center;
align-items:center;
max-height:400px;
height:${(props)=> props.perct}%;
border-radius:9px;
transition:1s;

`;

export default function Wlvl({outline,bgcolor,perct}) { /*outline={false or true}*/
    return (
        <>
        <Lvl outline={outline} bgcolor={bgcolor} perct={perct} >
        <div id="water"></div>    
       </Lvl>
       </>
    )
}
