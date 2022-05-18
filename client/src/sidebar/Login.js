import React, { useState } from 'react';
import axios from 'axios';
import { Redirect, Link } from 'react-router-dom';
import user from '../data/User';
function Login({ user, userInfo, setUserInfo, handleLoginSuccess }) {
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
        .post('http://localhost:8080/user/logIn', loginInfo, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          handleLoginSuccess(res);
          console.log('username: ', username);
          console.log('password: ', password);
        });
      // dummy data를 이용한 로그인 구현
      // user.filter((el) => {
      //   if (el.username === username && el.password === password) {
      //     setUserInfo({ ...userInfo, nickname: el.nickname });
      //     handleLoginSuccess();
      //     console.log('username: ', username);
      //     console.log('password: ', password);
      //     console.log('nickname: ', el.nickname);
      //   } else {
      //     setErrMsg('로그인 정보가 일치하지 않습니다.');
      //     console.log('로그인 정보가 일치하지 않습니다.');
      //   }
      // });
    }
  };
  return (
    <div>
      <div>개이득 서비스를 위한 로그인!</div>
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
