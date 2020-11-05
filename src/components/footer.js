import React, {useState, useEffect}from "react";
import styled from 'styled-components';

function Footer(props){
        const {title, info, date} = props;

    return (
    <StyledWhole>
        <StyledTitle className='Title'>
        <h2>{title}</h2>
        </StyledTitle>
        <StyledInfo className = 'infoDiv'>
            <p>{info}</p>
        </StyledInfo>
        <StyledDate classname = 'dateDiv'>
            <h4>{date}</h4>
        </StyledDate>


    </StyledWhole>);
}
const StyledWhole = styled.div`
background-color: lightgray;
border: 10px solid black;
`
const StyledTitle = styled.div`
    font-weight: bold;
    font-size: 1.75rem;
`
const StyledInfo = styled.div`
 font-size: 1.15rem;
 line-height: 1.8;
 font-family: 'Trispace', sans-serif;
 margin: 2%;

`
const StyledDate = styled.div`

`
export default Footer;