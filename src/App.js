import { useState } from 'react';
import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Editor from './pages/Editor';
import TopNavigation from './components/Common/TopNavigation';

function App() {
	return (
    <div className='App'>
      <TopNavigation />
      <div className='app-container'>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/editor" element={<Editor/>}/>
        </Routes>
      </div>
    </div>
	);
}

export default App;
