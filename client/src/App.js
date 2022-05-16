import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Nav from './Nav';
import Signup from './pages/Signup';
import EditProfile from './pages/EditProfile';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';
import Header from './Header';
import Footer from './Footer';

function App() {
  return (
    <div>
      <div className="head">
        <Header />
      </div>
      <div>
        <Nav />
      </div>
      <div className="content">
        <div className="sidebar">
          <Sidebar />
        </div>
        <div className="main">
          <Main />
        </div>
      </div>
      <div>
        <Footer />
      </div>
      {/* <div>
          <Link to="/">홈페이지</Link>
          <Link to="/Signup">회원 가입</Link>
          <Link to="/EditProfile">회원정보 수정</Link>
        </div>
        <div id="pages">
          <Switch>
            <Route exact path="/">
              <App/>
            </Route>
            <Route path="/Signup">
              <Signup />
            </Route>
            <Route path="/EditProfile">
              <EditProfile />
            </Route>
          </Switch>
        </div> */}
    </div>
  );
}

export default App;
