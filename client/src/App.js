import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import Signout from './pages/Signout';
import EditProfile from './pages/EditProfile';
import Ranking from './pages/Ranking';
import Rule from './pages/Rule';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div id='content'>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/Signup'>
              <Signup />
            </Route>
            <Route path='/Signout'>
              <Signout />
            </Route>
            <Route path='/EditProfile'>
              <EditProfile />
            </Route>
            <Route path='/ranking'>
              <Ranking />
            </Route>
            <Route path='/rule'>
              <Rule />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
