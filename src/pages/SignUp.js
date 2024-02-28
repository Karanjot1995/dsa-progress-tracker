import React, { useState } from 'react';
import { register } from '../services/services';
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = (e) => {
    e.preventDefault()
    register({ email: email, password: password }).then(res=>{
      if(res.user){
        toast.success("Signed Up Successfuly!");
        setTimeout(() => {
          navigate('/sign-in')
        }, "1500"); 
      }else{
        alert(res.message)
      }
      console.log(res)
    })
  };

  return (
    <div>
      <div className="sign-up">
        <ToastContainer/>
        <h2>Sign Up</h2>
        <form className='mb-3'>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button onClick={handleSignUp} type="submit">Sign Up</button>
        </form>
        <div className="text-light">Already have an account? <a className=" " target="_self" href="/sign-in">Sign In</a></div>
      </div>
    </div>
  );
};

export default SignUp;
