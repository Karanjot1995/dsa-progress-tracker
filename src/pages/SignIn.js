import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { login, register, test } from "../services/services";

const SignIn = (props) => {
  // const navigate = useNavigate();
  // let history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState ("");
  useEffect(() => {
    // Sign up request
    // register({ email: "exampleuser", password: "password123" }).then(res=>console.log(res))
    // Sign in request
    // login({ email: "exampleuser", password: "password123" }).then(res=>{
    //   if(res.token){
    //     localStorage.setItem("token", res.token)
    //   }else{
    //     console.log(res.message)
    //   }
    // })
    // test()
  }, []);

  const handleSignIn = (e) => {
    e.preventDefault()
    login({ email: email, password: password }).then(res=>{
      if(res.token){
        console.log(res)
        localStorage.setItem("token", res.token)
        window.history.go();
        // props.history.push("/home");
      }else{
        console.log(res.message)
      }
    })
  }


  return (
    <div>
      <div className="sign-in">
        <h2>Sign In</h2>
        <form>
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
          <button type="submit" onClick={handleSignIn}>Sign In</button>
        </form>
        <div>New here? <a className=" " target="_self" href="/sign-up">Sign up now</a></div>
      </div>
    </div>
    
  );
};
export default SignIn;