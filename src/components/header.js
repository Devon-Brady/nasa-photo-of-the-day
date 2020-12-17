import React, {useState, useEffect}from "react";
import styled from 'styled-components'
export default function Header(props) {
    return (
    <StyledHeader>Nasa's Picture of the Day!</StyledHeader>
    );
}
const StyledHeader = styled.h1`
display: flex;
font-size: 4rem;
margin-top: 0;
color:lightgray;
`
