import React, {useState, useEffect}from "react";
import styled from 'styled-components'


function Img(props){
const {hdImg} = props;

    return (
    
        <StyledImg src={hdImg} alt = 'Space Stuff from Nasa'/>

    );
}
const StyledImg = styled.img`
width: 60% ;
margin-right:5%;
border: 10px solid lightgray;


`


export default Img;