import React from 'react';
import { Link, BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home/Home';
import About from './pages/about/About';

const Body = () => {
  return (
      <div>

        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <Home/> } />
                <Route path="/about" element={ <About/> } />
            </Routes>
        </BrowserRouter>

      </div>
  );
};

export default Body;
