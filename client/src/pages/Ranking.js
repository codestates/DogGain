import Nav from '../Nav';
import Sidebar from '../sidebar/Sidebar';
import Main from '../main/Main';
import Header from '../Header';
import Footer from '../Footer';

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
      {/* <div className='foot'>
        <Footer />
      </div> */}
    </div>
  );
}

export default Ranking;
