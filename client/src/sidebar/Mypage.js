import React from 'react';
import { Link } from 'react-router-dom';

function Mypage({ user, userInfo, handleLogout }) {
  const { nickname } = userInfo;
  return (
    <div>
      <div>오늘도 개이득보러 오셨군요!?</div>
      <div>{'Welcome! ' + nickname}</div>
      <div>
        <Link
          to="/EditProfile"
          onClick={() => (window.location.href = '/EditProfile')}
        >
          회원정보 수정
        </Link>
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
