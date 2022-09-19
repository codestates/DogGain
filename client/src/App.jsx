import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Ranking from './pages/Ranking';
import Rule from './pages/Rule';
import Navbar from './Components/Navbar'
import Sidebar from './sidebar/Sidebar';
import Footer from './Footer';
import Main from './main/Main';

function App() {
  return (
    <>
    <BrowserRouter>
        <Navbar />
        <Sidebar />
          <Switch>
              <Route path="/" exact component={Main} />
              <Route path="/main" component={Main} />
              <Route path="/community" component={Ranking} />
              <Route path="/rule" component={Rule} />
          </Switch>
        <Footer />
    </BrowserRouter>
    </>
  );
}

export default App;
