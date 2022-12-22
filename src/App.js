import React from 'react';
import "./app.css"
import Header from './component/Header';
import Home from './container/Home';

const App = () => {

  return (
  <div className='text-center'>
   <Header />
   <Home />
  </div>
  );
};

export default App;
