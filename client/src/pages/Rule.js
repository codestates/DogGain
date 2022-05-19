import Nav from '../Nav';
import Sidebar from '../sidebar/Sidebar';
import Header from '../Header';
import Footer from '../Footer';
import Rule_data from '../Components/Rule_data';

function Rule() {
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
          <Rule_data />
        </div>
      </div>
      <div className='home-foot'>
        <Footer />
      </div>
    </div>
  );
}

export default Rule;
