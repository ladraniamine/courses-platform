import React from 'react';
import "./app.css"
import Header from './component/Header';
import About from './container/About';
import Home from './container/Home';
import Mentor from './container/Mentor';

const App = () => {

  return (
  <div className='text-center'>
   <Header />
   <Home />
   <About />
   <Mentor />
  </div>
  );
};

export default App;
