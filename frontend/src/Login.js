import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from 'jwt-decode'; // Correct import
import './Login.css';

function Login({ setAuth }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      setAuth({ isAuthenticated: true, role: 'admin' });
      navigate('/home1');
    } else if (username === 'student' && password === 'student123') {
      setAuth({ isAuthenticated: true, role: 'student' });
      navigate('/home');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleGoogleLoginSuccess = (credentialResponse) => {
    try {
      const decoded = jwtDecode(credentialResponse.credential);
      const email = decoded.email;
      const allowedDomain = 'bitsathy.ac.in';

      if (email.endsWith(`@${allowedDomain}`)) {
        const userRole = email === 'admin@example.com' ? 'admin' : 'student';
        setAuth({ isAuthenticated: true, role: userRole });
        navigate(userRole === 'admin' ? '/home1' : '/home');
      } else {
        setError(`Only users with @${allowedDomain} emails can log in.`);
      }
    } catch (error) {
      console.error('Error decoding token:', error);
      setError('Google login failed. Please try again.');
    }
  };

  const handleGoogleLoginFailure = () => {
    setError('Google login failed');
  };

  return (
    <GoogleOAuthProvider clientId="926945254218-qbprsf39joas7d2gle9hev6bj1qag83u.apps.googleusercontent.com">
      <div className="container">
        <div className="form">
          <h2 className="title">Welcome Back!</h2>
          <h3 className="subtitle">BANNARI AMMAN INSTITUTE OF TECHNOLOGY</h3>
          {error && <p className="error">{error}</p>}
          {!showForgotPassword ? (
            <form onSubmit={handleLogin}>
              <input
                type="text"
                placeholder="Email"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="input"
              />
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="input"
              />
              <button type="submit" className="button">SIGN IN</button>
            </form>
          ) : (
            <h1>Forgot Password</h1>
          )}
          <div
            className="forgot-password"
            onClick={() => setShowForgotPassword(!showForgotPassword)}
          >
            Forgot Password?
          </div>
          <div className="google-login-wrapper">
            <GoogleLogin
              onSuccess={handleGoogleLoginSuccess}
              onError={handleGoogleLoginFailure}
            />
          </div>
        </div>
      </div>
    </GoogleOAuthProvider>
  );
}

export default Login;
