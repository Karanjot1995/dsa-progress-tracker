import React, { useState } from 'react';

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Implement sign-up functionality here
    console.log('Signing up with:', email, password);
  };

  return (
    <div>
      <div className="sign-up">
        <h2>Sign Up</h2>
        <form onSubmit={handleSignUp}>
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
          <button type="submit">Sign Up</button>
        </form>
        <div>Already have an account? <a className=" " target="_self" href="/sign-in">Sign In</a></div>
      </div>
    </div>
  );
};

export default SignUp;
