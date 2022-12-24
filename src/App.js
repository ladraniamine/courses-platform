import React from 'react';
import "./app.css"
import Header from './component/Header';
import About from './container/About';
import Client from './container/Client';
import Home from './container/Home';
import Mentor from './container/Mentor';

const App = () => {

  return (
  <div className='text-center'>
   <Header />
   <Home />
   <About />
   <Mentor />
   <Client />
  </div>
  );
};

export default App;
