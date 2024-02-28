import { useState } from 'react';
import './App.scss';
import { Route, Routes, Navigate } from 'react-router-dom';

import Home from './pages/Home';
import Editor from './pages/Editor';
import TopNavigation from './components/Common/TopNavigation';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

function App() {
  const [isLogged, setIsLogged] = useState(localStorage.getItem('token'))
  // console.log(isLogged)
  // const isLogged = localStorage.getItem('token')
	return (
    <div className='App'>
      <TopNavigation />
      <div className='app-container'>
        <Routes>
          {isLogged?
          <>
            <Route path="*" element={<Navigate to ="/home"/>}/>
            <Route exact path="/home" element={<Home/>}/>
            {/* <Route exact path="/" element={<Home/>}/> */}
            <Route exact path="/editor" element={<Editor/>}/>
            <Route path="/sign-in" element={<Navigate to ="/"/>}/>
            <Route path="/sign-up" element={<Navigate to ="/"/>}/>          
          </>
        :
          <>
            <Route path="*" element={<Navigate to ="/sign-in"/>}/>
            <Route path="/sign-in" element={<SignIn/>}/>
            <Route path="/sign-up" element={<SignUp/>}/>
          </>
        } 
        </Routes>
      </div>
    </div>
	);
}

export default App;
