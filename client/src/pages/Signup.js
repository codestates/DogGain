import React, { useState } from 'react';
import axios from 'axios';
import { Redirect, Link, useHistory } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import user from '../data/User';
import SidebarHeader from '../SidebarHeader';

function Signup() {
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
  const handleSignup = () => {
    const { username, password, passwordCheck, nickname, email } = userInfo;
    console.log(userInfo);
    if (!username || !password || !passwordCheck || !nickname || !email) {
      setErrMsg('모든 항목이 필수입니다.');
    } else if (password !== passwordCheck) {
      setErrMsg('비밀번호가 다릅니다.');
    } else {
      axios
        .post(
          'http://localhost:8080/user/signUp',
          {
            username: username,
            password: password,
            nickname: nickname,
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

      // const allUser = [...user];
      // allUser.push({
      //   id: allUser.length,
      //   username: username,
      //   nickname: nickname,
      //   password: password,
      //   email: email,
      // });
      // history.push('/');
      // console.log(allUser);
      // console.log('username: ', username);
      // console.log('password: ', password);
      // console.log('passwordCheck: ', passwordCheck);
      // console.log('nickname: ', nickname);
      // console.log('email: ', email);
    }
  };
  return (
    <div>
      <div>
        <SidebarHeader />
      </div>
      <form className='signup' onSubmit={(e) => e.preventDefault()}>
        <h1>회원가입</h1>
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
          <div>Nickname</div>
          <input
            type='text'
            placeholder='Nickname'
            onChange={handleInputValue('nickname')}
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
        {/* <Link
          to="/"
          className="signup-btn"
          type="submit"
          onClick={handleSignup}
          onClick={() => (window.location.href = '/')}
        >
          회원가입
        </Link> */}
        <button type='submit' onClick={handleSignup}>
          회원가입
        </button>
      </form>
      <div className='foot'>
        <Footer />
      </div>
    </div>
  );
}
export default Signup;
