import { Link } from 'react-router-dom';

function SidebarHeader() {
  return (
    <header className='sidebar_header'>
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
export default SidebarHeader;
