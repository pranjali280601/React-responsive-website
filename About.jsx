import React from 'react';
import web from "../src/images/logo-white.png";
import Common from './Common';
import {NavLink} from "react-router-dom";
const About =() =>{
  return (
    <>
    <Common name="Welcome to About page " imgsrc={web} visit="/Contacts" but="Contact now"/>
     
    </>);
};

export default About;
