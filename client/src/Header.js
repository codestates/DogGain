import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='header'>
      <Link
        onClick={() => (window.location.href = '/')}
        className='nolinkstyle'
        to='/'
      >
        DogGain
      </Link>
    </header>
  );
}
export default Header;
