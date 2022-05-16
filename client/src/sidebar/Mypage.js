import React from 'react';
import { Link } from 'react-router-dom';

function Mypage({ userInfo, handleLogout }) {
  const { nickname } = userInfo;
  return (
    <div>
      <div>{nickname}</div>
      <div>
        <Link to="/EditProfile">회원정보 수정</Link>
      </div>
      <div>
        <button classname="logout-btn" onClick={handleLogout}>
          로그아웃
        </button>
      </div>
    </div>
  );
}
export default Mypage;
