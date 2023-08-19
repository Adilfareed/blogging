import React, { useState } from 'react';

function Signup() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = async (e) => {
    e.preventDefault();

    const newUser = {
      firstName: firstName,
      lastName: lastName,
      email: email,
      password: password,
    };

    try {
      const response = await fetch('./signup', {
        method: 'POST',
        headers: {
          'Content-Type': './user.json',
        },
        body: JSON.stringify(newUser),
      });

      if (response.ok) {
        console.log('User registered successfully');

        // Clear form fields after successful signup
        setFirstName('');
        setLastName('');
        setEmail('');
        setPassword('');

        // Refresh the page
        window.location.reload();
      } else {
        console.error('Failed to register user');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <div style={containerStyle}>
      <main>
        <form onSubmit={handleSignup}>
          <h1>Please sign up</h1>

          <div style={formGroupStyle}>
            <input
              type="text"
              style={formControlStyle}
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              placeholder="First Name"
            />
            <label htmlFor="floatingFirstName" style={labelStyle}>
              First Name
            </label>
          </div>
          <div style={formGroupStyle}>
            <input
              type="text"
              style={formControlStyle}
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              placeholder="Last Name"
            />
            <label htmlFor="floatingLastName" style={labelStyle}>
              Last Name
            </label>
          </div>
          <div style={formGroupStyle}>
            <input
              type="email"
              style={formControlStyle}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address"
            />
            <label htmlFor="floatingEmail" style={labelStyle}>
              Email Address
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
              Password
            </label>
          </div>

          <button
            style={buttonStyle}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = buttonStyle.backgroundColor;
            }}
            type="submit"
          >
            Sign up
          </button>
        </form>
      </main>
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

const buttonStyle = {
  backgroundColor: '#007bff',
  color: '#fff',
  padding: '10px',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

const buttonHoverStyle = {
  backgroundColor: '#0056b3',
};

export default Signup;
