import React, {useState, useEffect}from "react";
import "./App.css";
import axios from 'axios';
import Header from './components/header';
import Img from './components/img';
import Footer from './components/footer';

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
    <div className="App">
      <Header/>
      <Img
      hdImg = {data.hdurl} 
      />
      <Footer
      title = {data.title}
      info = {data.explanation}
      date ={data.date}
      />
    </div>
  );
}

export default App;
