import React from 'react';
import Crew from './Crew';
import ParentForm from './ParentForm';
import UserLogin from './UserLogin';
import './App.css';
import Navbar from './Navbar';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  return (
    <div>
    <Routes>
        <Route path='/' element={<UserLogin />} />
        <Route path='/userLogin' element={<UserLogin />} />
        <Route path='/parentForm' element={<><Navbar /><ParentForm /></>} />
        <Route path='/crew' element={<><Navbar /><Crew /></>} />
        <Route path='*' element={<Navigate to='/' />} />
    </Routes>
</div>
  );
}

export default App;
