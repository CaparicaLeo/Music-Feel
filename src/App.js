import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home.js';
import Login from './pages/Login/Login.js';
import Courses from './pages/Courses/Courses.js';
import Gui from './pages/Guitar/Guitar.js';
import Guitar from './pages/Guitar/Guitar.js';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/login" element={<Login/>}/>
        <Route path='/courses' element={<Courses/>}/>
        <Route path='/guitar' element={<Guitar/>}/>
      </Routes>
    </Router>
  );
};

export default App;