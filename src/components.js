import React from 'react'
import './App.css'

const Home = (props) => {
    return <div className='current_page'>Home page</div>;
  };
  
  const News = (props) => {
    return <div className='current_page'>News page</div>;
  };
  
  const CallBack = (props) => {
    return <div className='current_page'>CallBack page</div>;
  };
  
  const Contacts = (props) => {
    return <div>Contacts page</div>;
  };
  
  export { Home, News, CallBack, Contacts };