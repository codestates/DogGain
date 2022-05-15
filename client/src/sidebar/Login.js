import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
function Login () {
    const [loginInfo, setLoginInfo] = useState({
        username: '',
        password: '',
    })
    const [errMsg, setErrMsg] = useState('');
    // const handleInputValue
    const handleLogin = () => {
        const { username, password } = loginInfo
        if (!username || !password ) {
            setErrMsg('username과 password를 입력해주세요.')
        } else {
            axios.post(
                "https://localhost:3000/signin",
                loginInfo,
                { headers: { "Content-Type": "application/json" }, withCredentials: true }
            )
            .then((res) => {
                handleResponseSuccess();
            })
        }
    }
    return (
        <div>
            <div>
                <input
                    placeholder="username"
                    type="string"
                />
            </div>
            <div>
                <input
                    placeholder="password"
                    type="string"
                />
            </div>
            <div>
                <button classname='login-btn' onClick={handleLogin}>
                    로그인
                </button>
            </div>
            <div>
                <Link to='../pages/Signup'>아직 아이디가 없으신가요?</Link>
            </div>
        </div>
    )
}
export default Login;