import { Link } from 'react-router-dom';

function SidebarHeader() {
  return (
    <header className='sidebar_header'>
      <Link
        onClick={() => (window.location.href = '/')}
        className='logo_linkstyle'
        to='/'
      >
        {/* <img
        className='logo'
        src={'Logo.png'}
        id='logo-image'
        alt='이미지가 없을 때 나오는 대체 텍스트'
      ></img> */}
        DogGain
      </Link>
    </header>
  );
}
export default SidebarHeader;