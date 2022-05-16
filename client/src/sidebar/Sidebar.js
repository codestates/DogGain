import React, { useState, useEffect } from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  Link,
  useHistory,
} from 'react-router-dom';
import axios from 'axios';
import Home from '../pages/Home';
import Signup from '../pages/Signup';
import EditProfile from '../pages/EditProfile';
import Login from './Login';
import Mypage from './Mypage';
function Sidebar() {
  const [isLogin, setIsLogin] = useState(false);
  const [userInfo, setUserInfo] = useState({
    username: 'L9628',
    password: '1234',
    nickname: 'Minhyuk',
    email: 'mhp4718@gmail.com',
  });
  const history = useHistory();
  const isAuth = () => {
    setIsLogin(true);
  };
  const handleLoginSuccess = () => {
    isAuth();
  };
  const handleLogout = () => {
    axios.post('https://localhost:3000/logout').then(() => {
      setUserInfo(null);
      setIsLogin(false);
      history.push('/');
    });
    setIsLogin(false);
  };
  useEffect(() => {
    isAuth();
  }, []);
  return (
    <div>
      <div className="login">
        {isLogin ? (
          <Mypage userInfo={userInfo} handleLogout={handleLogout} />
        ) : (
          <Login isLogin={isLogin} handleLoginSuccess={handleLoginSuccess} />
        )}
        {/* <div>
          <Link to="/Signup">회원가입</Link>
        </div>
        <div>
          <Link to="/EditProfile">회원정보 수정</Link>
        </div> */}
      </div>
      <div className="filter">Filter 컴포넌트</div>
    </div>
  );
}
export default Sidebar;

// import React, { useState, useEffect } from 'react';
// import { useHistory } from 'react-router-dom';
// import axios from 'axios';
// import Login from './Login';
// import Mypage from './Mypage';
// function Sidebar() {
//   const [isLogin, setIsLogin] = useState(false);
//   const [userInfo, setUserInfo] = useState(null);
//   const history = useHistory();
//   const isAuth = () => {
//     setIsLogin(true);
//   };
//   const handleLoginSuccess = () => {
//     isAuth();
//   };
//   const handleLogout = () => {
//     axios.post('https://localhost:3000/logout').then(() => {
//       setUserInfo(null);
//       setIsLogin(false);
//       history.push('/');
//     });
//     setIsLogin(false);
//   };
//   useEffect(() => {
//     isAuth();
//   }, []);
//   return (
//     <div>
//       {isLogin ? (
//         <Mypage userInfo={userInfo} handleLogout={handleLogout} />
//       ) : (
//         <Login isLogin={isLogin} handleLoginSuccess={handleLoginSuccess} />
//       )}
//     </div>
//   );
// }
// export default Sidebar;
