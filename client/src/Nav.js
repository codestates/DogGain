import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div className='realfinal'>
      <div id='nav-bar'>
        <Link
          onClick={() => (window.location.href = '/ranking')}
          to='/ranking'
          className='ranking'
        >
          <div className='ranking'>랭킹</div>
        </Link>
        <Link to='/review' className='review'>
          <div className='review'>후기</div>
        </Link>
        <Link to='/forum' className='forum'>
          <div className='forum'>포럼</div>
        </Link>
        <Link
          onClick={() => (window.location.href = '/rule')}
          to='/rule'
          className='rules'
        >
          <div className='rules'>이용규칙</div>
        </Link>
      </div>
    </div>
  );
}
export default Nav;
