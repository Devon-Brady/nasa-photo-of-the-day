import React, {useState, useEffect}from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/header';
import Img from './components/img';
import Footer from './components/footer';
import styled from 'styled-components'

function App() {
  const  [data, setData] = useState([])
useEffect(() => {
  axios.get('https://api.nasa.gov/planetary/apod?api_key=KeuOhmRTyk7ZZJQghYrjpnocLxBTxPWLfuNHJ51v')
  .then((res) => {
    console.log(res);
   setData(res.data);
  })
  .catch((err) => {
  debugger
  })

},[])





  return (
    <StyledBackground>
    <StyledContainer className="App">
      <Header/>
      <StyledInfo>
      <Img
      hdImg = {data.hdurl} 
      />
      <Footer
      title = {data.title}
      info = {data.explanation}
      date ={data.date}
      />
      </StyledInfo>

    </StyledContainer>
    </StyledBackground>
  );
}
const StyledBackground = styled.div`
background-color: black;
padding-bottom: 1%;
`
const StyledContainer = styled.div`
margin: 0 3%;
background-color: black;
`
const StyledInfo = styled.div`
display:flex;
text-align: center;
justify-content: space-around;
font-family: 'Trispace', sans-serif;

`

export default App;
