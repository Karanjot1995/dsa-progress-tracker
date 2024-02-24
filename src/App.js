import { useState } from 'react';
import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Editor from './pages/Editor';

function App() {
	return (
    <div className='App'>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route exact path="/editor" element={<Editor/>}/>
      </Routes>
    </div>
	);
}

export default App;
