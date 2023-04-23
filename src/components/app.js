import React from "react";

import './app.css';
import reactImg from '../assets/docker.jpeg';
import dockerImg from '../assets/logo512.png';


function AppComponent(){
    return(
        <div className="container">
            <img src={reactImg} alt="reactImg" className=""/>
            <h1>React & Docker</h1>
            <img src={dockerImg} alt="dockerImg" className=""/>
            Halo!!
        </div>
    )
}

export default AppComponent;