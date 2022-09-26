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
    <div className="p-10">
      <div className="text-sm font-medium mb-2">DogGain 로그인</div>
      <form>
        <input
          placeholder="username"
          className="mt-1 block w-full px-3 py-2 bg-white border-2 border-grey-50 border-slate-300 rounded-md text-xs shadow-sm placeholder-slate-400
          focus:outline-none focus:border-blue-50 focus:ring-1 focus:ring-blue-50
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-white-500 invalid:text-white-600
          focus:invalid:border-white-500 focus:invalid:ring-white-500"
          type="string"
          autoComplete='username'
          onChange={handleInputValue('username')}
        />
      </form>
      <form>
        <input
          className="mt-1 block w-full px-3 py-2 bg-white border-2 border-grey-50 border-slate-300 rounded-md text-6xs shadow-sm placeholder-slate-400
          focus:outline-none focus:border-blue-50 focus:ring-1 focus:ring-blue-50
          disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
          invalid:border-white-500 invalid:text-white-600
          focus:invalid:border-white-500 focus:invalid:ring-white-500"
          placeholder="password"
          autoComplete='current_password'
          type="password"
          onChange={handleInputValue('password')}
        />
      </form>

      <div>
        <button className="text-xs mt-6 ml-6 rounded-md hover:bg-blue-50 hover:text-white  hover:scale-125 duration-200" onClick={handleLogin}>
          로그인
        </button>

      <Link
        to="/Signup"
        onClick={() => (window.location.href = '/Signup')}
      >
        <button className='text-xs ml-6 rounded-md hover:bg-blue-50 hover:text-white  hover:scale-125 duration-200'>회원가입</button>
      </Link>


      </div>


      <div className="text-2xs">{errMsg}</div>


    </div>
  );
}
export default Login;
