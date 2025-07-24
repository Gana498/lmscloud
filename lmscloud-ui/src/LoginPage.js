import React, { useState } from 'react';
import axios from 'axios';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      alert('Logging in with username: ' + username + ' and password: ' + password);
      const response = await axios.post('http://127.0.0.1:8080/api/login', {
        username,
        password
      });
      alert('Response: ' + response.data);
    } catch (error) {
      alert('Login failed!');
    }
  };

  return (
    <div style={{ marginTop: '100px', textAlign: 'center' }}>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        /><br /><br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        /><br /><br />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default LoginPage;
