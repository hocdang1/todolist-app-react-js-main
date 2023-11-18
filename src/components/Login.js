// Login.js
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  const handleLogin = async () => {
    try {
      // Perform login using the provided API
      // Assume loginApi is a function that performs the login
      const response = await loginApi(username, password);

      // If login succeeds, redirect to Todo app home page
      if (response.success) {
        // Redirect to Todo app home page
        history.push('/todo');

        // Fetch user information and display it at the top of the site
        const userInfo = await getUserInfo();
        console.log('User Information:', userInfo);
      } else {
        // Handle login failure
        console.error('Login failed');
      }
    } catch (error) {
      console.error('Error during login:', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <div>
        <label>Username:</label>
        <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
