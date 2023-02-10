import React, { useState, useEffect, useContext } from 'react';
import Crypto from '../components/Crypto';
import { Context } from '../Context';
import Header from '../components/Header';
import TodoList from '../components/Todo';


function Hero(){
    //const { image } = useContext(Context) 

    return (
        <div 
            className='hero'
            style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1533371452382-d45a9da51ad9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2NzU5ODUwNzc&ixlib=rb-4.0.3&q=80&w=1080)`
              }} 
            >
            <Header />
            <div className='container'>
                <Crypto />
                <TodoList />
            </div>
        </div>
    )
}

export default Hero