function Sidebar() {
  return (
    <div>
      <div>Sidebar 컴포넌트</div>
      <div className="login">Login / Mypage 컴포넌트</div>
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
