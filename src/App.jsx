import React from 'react';
import Router from './component/router';
import Route from './component/route';
import Home from './component/Home';
import About from './component/about';

  export default function App() {
    return (
      <Router>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Router>
    );
  }