import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

let serverURL = 'http://ec2-52-78-195-243.ap-northeast-2.compute.amazonaws.com';

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
        .post(`${serverURL}/user/logIn`, loginInfo, {
          headers: { 'Content-Type': 'application/json' },
          withCredentials: true,
        })
        .then((res) => {
          console.log(res);
          handleLoginSuccess(res);
          console.log('username: ', username);
          console.log('password: ', password);
        });
    }
  };
  return (
    <div className='p-2'>
      <div className='text-xs font-medium mb-2'>DogGain 로그인</div>
      <div>
        <input
          placeholder='username'
          className=''
          type='string'
          onChange={handleInputValue('username')}
        />
      </div>
      <div>
        <input
          placeholder='password'
          type='password'
          onChange={handleInputValue('password')}
        />
      </div>
      <div>
        <button className='login-btn' onClick={handleLogin}>
          로그인
        </button>
      </div>

      <Link
        className='signup_link'
        to='/Signup'
        onClick={() => (window.location.href = '/Signup')}
      >
        회원가입
      </Link>

      <div className='alert-box'>{errMsg}</div>
    </div>
  );
}
export default Login;
