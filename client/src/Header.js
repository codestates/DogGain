import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to='/'>
        <img
          className='logo'
          src={'Logo.png'}
          id='logo-image'
          alt='이미지가 없을 때 나오는 대체 텍스트'
        ></img>
      </Link>
    </header>
  );
}
export default Header;
