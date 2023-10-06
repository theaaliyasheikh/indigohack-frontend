import { useState } from 'react';
import axios from 'axios';
import './UserLogin.css';
import 'font-awesome/css/font-awesome.min.css';
import { useNavigate } from 'react-router-dom';
import { Icon } from 'react-icons-kit';
import { eyeSlash } from 'react-icons-kit/fa/eyeSlash';
import { eye } from 'react-icons-kit/fa/eye'

function UserLogin() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [type, setType] = useState('password');
  const [icon, setIcon] = useState(eyeSlash);
  const [usertype, setUsertype] = useState('');
  const navigate = useNavigate();
  
  const handleToggle = () => {
    if (type === 'password') {
      setIcon(eye);
      setType('text')
    } else {
      setIcon(eyeSlash)
      setType('password')
    }
  }

  const handleLogin = (userData) => {
    // Make the API call using axios
    console.log(userData);
    axios.post('http://localhost:8080/login', userData)
      .then((response) => {
        localStorage.setItem("userData", JSON.stringify(response.data.data));
        if (response.data.data.usertype === 'parent') navigate('/parentForm');
        if (response.data.data.usertype === 'crew') navigate('/crew');
      })
      .catch((error) => {
        console.error('Login failed:', error);
      });
  };

  function validateForm() {
    let countSpecialCharacters = 0;
    let countUpperCase = 0;
    let countLowerCase = 0;
    let countDigit = 0;

    if (username.length === 0) {
      alert('Invalid Form, username can not be empty')
      return
    }

    if (usertype.length === 0) {
      alert('Invalid Form, usertype can not be empty')
      return
    }

    for (let i = 0; i < password.length; i++) {
      const specialCharacters = [
        '!',
        '@',
        '#',
        '$',
        '%',
        '^',
        '&',
        '*',
        '(',
        ')',
        '_',
        '-',
        '+',
        '=',
        '[',
        '{',
        ']',
        '}',
        ':',
        ';',
        '<',
        '>',
      ]
      if (specialCharacters.includes(password[i])) {
        countSpecialCharacters++;
      }
      else if (!isNaN(password[i] * 1)) {
        countDigit++
      }
      else {
        if (password[i] === password[i].toUpperCase()) {
          countUpperCase++
        }
        if (password[i] === password[i].toLowerCase()) {
          countLowerCase++
        }
      }
    }

    if (password.length === 0) {
      alert('please enter the password!')
    }

    else if (countLowerCase === 0) {
      alert('Invalid Form, 0 lower case characters in password')
      return
    }

    else if (countUpperCase === 0) {
      alert('Invalid Form, 0 upper case characters in password')
      return
    }

    else if (countDigit === 0) {
      alert('Invalid Form, 0 digit characters in password')
      return
    }

    else if (countSpecialCharacters === 0) {
      alert('Invalid Form, 0 special characters in password')
      return
    }
    else {
      handleLogin({ username, password, usertype });
    }
  }

  return (
    <main>
      <div className="container1">
        <div>
          <div className="right">
            <h1>USER LOGIN</h1>
            <form className="loginForm">
              <div><input className='username' type="text" placeholder='&#xf007;' onChange={(e) => setUsername(e.target.value)} /></div>
              <div><input className='password' type={type} placeholder='&#xf023;' value={password} onChange={(e) => setPassword(e.target.value)} />
                <span className="eyeIcon" onClick={handleToggle}>
                  <Icon className="eye" icon={icon} />
                </span>
              </div>
              <div><select className='classic' onChange={(e) => setUsertype(e.target.value)}>
                <option value="">Usertype</option>
                <option value="parent"> Parent</option>
                <option value="crew">Crew</option>
                <option value="cisf">CISF Personnel</option>
              </select></div>
              <div className="others">
                <div>
                  <input type="checkbox" />
                  <span>Remember me</span>
                </div>
                <div>
                  <a href="#">Forgot Password?</a>
                </div>
              </div>
              <div><button type="button" className="btn btn-primary" onClick={() => {
                validateForm()
              }}>Login</button></div>
            </form>
          </div>
        </div>
      </div>
    </main>
  );
}

export default UserLogin;
