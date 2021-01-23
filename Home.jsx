import React from 'react';
import web from "../src/images/logo-white.png";
import Common from "./Common";
import {NavLink} from "react-router-dom";
const Home =() =>{
  return (
    <>
    
    <Common name="Get your business started with " imgsrc={web} visit="/Service" but="Get started"/>
    </>);
};

export default Home;
