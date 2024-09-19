import React, { useState } from 'react'
import './Home.css'
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if(username === 'admin' && password === 'root'){
      navigate('/dashboard')
    } else {
      alert('Invalid Credentials! Please Try Again')
    }
  }

  return (
    <div className='home'>
      <div className="login-container">
        <h1>Login</h1>
        <form id="loginForm" onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input 
              type="text" 
              id="username" 
              name="username" 
              value={username} 
              onChange={(e) => {setUsername(e.target.value)}}
              required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input 
              type="password" 
              id="password" 
              name="password" 
              value={password}
              onChange={(e) => {setPassword(e.target.value)}}
              required/>
          </div>
          <button type="submit">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Home