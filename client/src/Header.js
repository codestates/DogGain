import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='home_header'>
      <Link
        onClick={() => (window.location.href = '/')}
        className='logo_linkstyle'
        to='/'
      >
        DogGain
      </Link>
    </header>
  );
}
export default Header;
