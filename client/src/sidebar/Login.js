import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
function Login({ handleLoginSuccess }) {
  const [loginInfo, setLoginInfo] = useState({
    username: '',
    password: '',
  });
  const [errMsg, setErrMsg] = useState('');
  const handleInputValue = (key) => (e) => {
    setLoginInfo({ ...loginInfo, [key]: e.target.value });
  };
  const handleLogin = () => {
    const { username, password } = loginInfo;
    if (!username || !password) {
      setErrMsg('username과 password를 입력해주세요.');
    } else {
      axios
        .post('https://localhost:3000/', loginInfo, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        })
        .then(() => {
          handleLoginSuccess();
        });
    }
  };
  return (
    <div>
      <div>
        <input
          placeholder="username"
          type="string"
          onChange={handleInputValue('username')}
        />
      </div>
      <div>
        <input
          placeholder="password"
          type="password"
          onChange={handleInputValue('password')}
        />
      </div>
      <div>
        <button classname="login-btn" onClick={handleLogin}>
          로그인
        </button>
      </div>
      <div>
        <Link to="/Signup" onClick={() => (window.location.href = '/Signup')}>
          아직 아이디가 없으신가요?
        </Link>
      </div>
      <div className="alert-box">{errMsg}</div>
    </div>
  );
}
export default Login;
