import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Ranking from './pages/Ranking';
import Rule from './pages/Rule';
import Navbar from './Components/Navbar'
import Sidebar from './sidebar/Sidebar';
import Footer from './Footer';
import Home from './pages/Home';
import Forum from './pages/Forum';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <div className='flex bg-grey-10'>
        <Sidebar />
          <Switch>
              <Route path="/" exact component={Home} />
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
