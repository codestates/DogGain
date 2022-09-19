import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Ranking from './pages/Ranking';
import Rule from './pages/Rule';
import Navbar from './Components/Navbar'
import Sidebar from './sidebar/Sidebar';
import Footer from './Footer';
import Main from './main/Main';
import Forum from './pages/Forum';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <div className='flex'>
        <Sidebar />
          <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/ranking" component={Ranking} />
              <Route path="/forum" component={Forum} />
              <Route path="/rule" component={Rule} />
          </Switch>
          </div>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
