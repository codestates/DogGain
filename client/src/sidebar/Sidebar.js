import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import Login from './Login';
import Mypage from './Mypage';
function Sidebar() {
  const user = [
    {
      id: 1,
      username: 'bhy',
      nickname: 'toughguy',
      password: 'soda1234',
      email: 'yangsan@gmail.com',
    },
    {
      id: 2,
      username: 'kms',
      nickname: 'musiclover',
      password: 'coke1234',
      email: 'jinju@naver.com',
    },
    {
      id: 3,
      username: 'pmh',
      nickname: 'developlife',
      password: '1q2q3e4r',
      email: 'daegu@daum.net',
    },
    {
      id: 4,
      username: 'ljy',
      nickname: 'sharesmile',
      password: 'u2n3icon',
      email: 'busan@github.com',
    },
  ];
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: '',
    password: '',
    nickname: '',
    email: '',
  });
  const history = useHistory();
  const isAuth = (res) => {
    setIsLogin(true);
    console.log('isLogin ?? :: ', isLogin);
    console.log('성공적으로 로그인 성공 되셨습니다!');
  };
  const handleLoginSuccess = () => {
    isAuth();
  };
  const handleLogout = () => {
    setIsLogin(false);
    history.push('/');
    console.log('성공적으로 로그아웃 되셨습니다!');
  };

  return (
    <div className='flex flex-col items-center space-x-6 bg-grey-10 p-4'>
      <div className='bg-white'>
        {isLogin ? (
          <Mypage user={user} userInfo={userInfo} handleLogout={handleLogout} />
        ) : (
          <Login
            user={user}
            isLogin={isLogin}
            setUserInfo={setUserInfo}
            handleLoginSuccess={handleLoginSuccess}
          />
        )}
      </div>
    </div>
  );
}
export default Sidebar;
