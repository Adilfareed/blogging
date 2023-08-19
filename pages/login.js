import React, { useState } from 'react';
import usersData from './user.json'

function Signin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    // Find the user in the JSON data
    const user = usersData.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      // Authentication successful, you can implement further actions
      console.log('Authentication successful:', user);
    } else {
      // Authentication failed
      console.log('Authentication failed');
    }
  };

  return (
    <div style={containerStyle}>
      <main>
        <form onSubmit={handleSubmit}>
          <h1>Please sign in</h1>

          <div style={formGroupStyle}>
            <input
              type="text"
              style={formControlStyle}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
            <label htmlFor="floatingInput" style={labelStyle}>
             
            </label>
          </div>
          <div style={formGroupStyle}>
            <input
              type="password"
              style={formControlStyle}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            <label htmlFor="floatingPassword" style={labelStyle}>
           
            </label>
          </div>

          <div style={checkboxStyle}>
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button
            style={buttonStyle}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = signinButtonHoverStyle.backgroundColor;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
            type="submit"
          >
            Sign in
          </button>
        </form>
      </main>
      <br/> 
      Do not have an account?
             
      <a href="./signup">SignUp</a>
    </div>
  );
}

const containerStyle = {
  maxWidth: '400px',
  margin: '0 auto',
  padding: '20px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const formGroupStyle = {
  margin: '10px 0',
  position: 'relative',
};

const formControlStyle = {
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '5px',
};

const labelStyle = {
  position: 'absolute',
  top: '0',
  left: '0',
  padding: '10px',
  pointerEvents: 'none',
  transition: '0.2s ease all',
};

const checkboxStyle = {
  margin: '10px 0',
};

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const signinButtonHoverStyle = {
  backgroundColor: '#0056b3',
};

export default Signin;
