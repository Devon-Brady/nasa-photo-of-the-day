import React, {useState, useEffect}from "react";


function Footer(props){
        const {title, info, date} = props;

    return (
    <div>
        <div className='Title'>
        <h2>{title}</h2>
        </div>
        <div className = 'infoDiv'>
            <p>{info}</p>
        </div>
        <div classname = 'dateDiv'>
            <h4>{date}</h4>
        </div>


    </div>);
}



export default Footer;