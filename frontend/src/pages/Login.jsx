// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { login } from '../services/api';
// import '../styles/login.css';
// const Login = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleLogin = async (e) => {
//     e.preventDefault();
//     try {
//       console.log('Login attempt:', email);
//       const data = await login(email, password);
//       localStorage.setItem('token', data.token);
//       console.log('Login successful:', data);
  
//       if (email.includes('manager')) {
//         console.log('Navigating to Manager Dashboard');
//         navigate('/manager-dashboard');
//       } else if (email.includes('pantry')) {
//         console.log('Navigating to Pantry Dashboard');
//         navigate('/pantry-dashboard');
//       } else if (email.includes('delivery')) {
//         console.log('Navigating to Delivery Dashboard');
//         navigate('/delivery-dashboard');
//       }
//     } catch (error) {
//       alert('Login failed. Check credentials.');
//       console.error(error);
//     }
//   };
  
  

//   return (
//     <div className="login-container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="email"
//           placeholder="Email"
//           value={email}
//           onChange={(e) => setEmail(e.target.value)}
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//         />
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { login } from '../services/api';
import '../styles/login.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const data = await login(email, password);
      localStorage.setItem('token', data.token);

      if (email.includes('manager')) {
        navigate('/manager-dashboard');
      } else if (email.includes('pantry')) {
        navigate('/pantry-dashboard');
      } else if (email.includes('delivery')) {
        navigate('/delivery-dashboard');
      }
    } catch (error) {
      alert('Login failed. Check credentials.');
      console.error(error);
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Login</h1>
        <form onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit">Login</button>
        </form>
        <div className="forgot-password">
          <a href="/forgot-password">Forgot Password?</a>
        </div>
      </div>
    </div>
  );
};

export default Login;
