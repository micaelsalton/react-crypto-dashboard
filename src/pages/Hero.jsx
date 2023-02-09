import React, { useState, useEffect, useContext } from 'react';
import Crypto from '../components/Crypto';
import { Context } from '../Context';
import Header from '../components/Header';


function Hero(){
    const { image } = useContext(Context) 

    return (
        <div 
            className='hero'
            style={{
                backgroundImage: `url(${image})`
              }} 
            >
                <Header />
            <Crypto />
        </div>
    )
}

export default Hero