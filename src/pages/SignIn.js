import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register, test } from "../services/services";

const SignIn = (props) => {
  // const navigate = useNavigate();
  // let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState ("");
  const [isLoading, setIsLoading] = useState(false)
  // useEffect(() => {

  // }, []);

  const handleSignIn = (e) => {
    e.preventDefault()
    setIsLoading(true)
    login({ email: email, password: password }).then(res=>{
      if(res.token){
        setIsLoading(false)
        localStorage.setItem("token", res.token)
        localStorage.setItem("user", JSON.stringify(res.user))
        window.history.go();
      }else{
        alert('email/password incorrect')
        setIsLoading(false)
      }
    })
  }


  return (
    <div>
      <div className="sign-in">
        <h2>Sign In</h2>
        <form className="mb-3">
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
          <button disabled={isLoading} type="submit" onClick={handleSignIn}>{isLoading?'Signing in...':'Sign In'}</button>
        </form>
        <div className="text-light">New here? <a className=" " target="_self" href="/sign-up">Sign up now</a></div>
      </div>
    </div>
    
  );
};
export default SignIn;