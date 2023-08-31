import React from 'react';
import { About,Footer,Header,Skills,Work } from './container';

import { Navbar } from './components';
import AppWrap from './wrapper/AppWrap';
import './App.scss'



const App = () => {
  return (
    <div className='app'>
    <Navbar />
    <Header />
    <AppWrap />
      <About />
      <Work />
      <Skills />
    {/* <Testimonials /> */}
      
      <Footer />
    
    </div>

  );
}

export default App;