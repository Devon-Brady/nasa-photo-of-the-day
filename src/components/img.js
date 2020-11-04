import React, {useState, useEffect}from "react";



function Img(props){
const {hdImg} = props;
    return (
    <div>
        <img src={hdImg} alt = 'Space Stuff from Nasa'/>
    </div>
    
    );
}


export default Img;