import Nav from '../Nav';
import Sidebar from '../sidebar/Sidebar';
import Main from '../main/Main';
import Header from '../Header';

function Ranking() {
  return (
    <div>
      <div className='head'>
        <Header />
      </div>
      <div>
        <Nav />
      </div>
      <div className='content'>
        <div className='sidebar'>
          <Sidebar />
        </div>
        <div className='main'>
          <Main />
        </div>
      </div>
    </div>
  );
}

export default Ranking;
