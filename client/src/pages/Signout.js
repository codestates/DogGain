import React, { useState } from 'react';
import axios from 'axios';
import { Link, useHistory } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

let serverURL = 'http://ec2-52-78-195-243.ap-northeast-2.compute.amazonaws.com';

function Signout() {
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    passwordCheck: '',
    nickname: '',
    email: '',
  });
  const [errMsg, setErrMsg] = useState('');
  const history = useHistory();
  const handleInputValue = (key) => (e) => {
    setUserInfo({ ...userInfo, [key]: e.target.value });
  };
  const handleSignout = () => {
    const { username, password, passwordCheck, email } = userInfo;
    console.log(username, password, email);
    if (!username || !password || !passwordCheck || !email) {
      setErrMsg('모든 항목이 필수입니다.');
    } else if (password !== passwordCheck) {
      setErrMsg('비밀번호가 다릅니다.');
    } else {
      axios
        .delete(
          `${serverURL}/user/signout`,
          {
            username: username,
            password: password,
            email: email,
          },
          {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          }
        )
        .then(() => {
          window.location.href = '/';
        });
    }
  };
  return (
    <div>
      <div>
        <Header />
      </div>
      <form className='signout' onSubmit={(e) => e.preventDefault()}>
        <h1>회원탈퇴</h1>
        <div className='return-home'>
          <Link to='/' onClick={() => (window.location.href = '/')}>
            다시 메인페이지로!
          </Link>
        </div>
        <div>모든 항목은 필수입니다.</div>
        <div>
          <div>Username</div>
          <input
            type='text'
            placeholder='Username'
            onChange={handleInputValue('username')}
          ></input>
        </div>
        <div>
          <div>Password</div>
          <input
            type='password'
            placeholder='Password'
            onChange={handleInputValue('password')}
          ></input>
        </div>
        <div>
          <div>Password 확인</div>
          <input
            type='password'
            placeholder='Password'
            onChange={handleInputValue('passwordCheck')}
          ></input>
        </div>
        <div>
          <div>E-mail</div>
          <input
            type='email'
            placeholder='E-mail'
            onChange={handleInputValue('email')}
          ></input>
        </div>
        <div className='alert-box'>{errMsg}</div>
        <button className='signout-btn' type='submit' onClick={handleSignout}>
          회원탈퇴
        </button>
      </form>
      <div className='foot'>
        <Footer />
      </div>
    </div>
  );
}
export default Signout;
