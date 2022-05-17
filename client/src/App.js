import { Redirect, BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import Home from './pages/Home';
import Signup from './pages/Signup';
import EditProfile from './pages/EditProfile';

function App() {
  return (
    <BrowserRouter>
      <div>
        <div id="pages">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/Signup">
              <Signup />
            </Route>
            <Route path="/EditProfile">
              <EditProfile />
            </Route>
            <Route path="/ranking">
              <Ranking />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
