// import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Nav() {
  return (
    <div>
      <div id='nav-bar'>
        <Link to='/ranking' className='ranking'>
          <div className='ranking'>랭킹</div>
        </Link>
        <Link to='/review' className='review'>
          <div className='review'>후기</div>
        </Link>
        <Link to='/forum' className='forum'>
          <div className='forum'>포럼</div>
        </Link>
        <Link to='/rule' className='rules'>
          <div className='rules'>이용규칙</div>
        </Link>
      </div>
    </div>
  );
}
export default Nav;
