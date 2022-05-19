import React from 'react';
import { Link } from 'react-router-dom';

function Mypage({ user, userInfo, handleLogout }) {
  const { nickname } = userInfo;
  return (
    <div className='mypage_container'>
      <div className='mypage_content2'>{'Welcome! ' + nickname}</div>
      <div className='mypage_content1'>오늘도 개이득보러 오셨군요!?</div>
      <div>
        <div className='mypage_content3'>
          <button classname='logout_btn' onClick={handleLogout}>
            로그아웃
          </button>
        </div>
        <Link
          className='edit_link'
          to='/EditProfile'
          onClick={() => (window.location.href = '/EditProfile')}
        >
          회원정보 수정
        </Link>
      </div>
    </div>
  );
}
export default Mypage;
