import React from 'react'
// import { Link } from "react-router-dom";
import Team from '../components/Team';
import Footer from '../components/Footer';
import Hero from '../components/Hero';

import Navbar from '../components/Navbar';
import WhatWeDo from '../components/WhatWeDo';

const Home = () => {
  return (
    <div className=''>

        <Navbar />  

        <Hero />

        <WhatWeDo />


        <Team />

        <Footer />

    </div>
  )
}

export default Home
