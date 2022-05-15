import Header from './Header';
import Nav from './Nav';
import Footer from './Footer';
import Sidebar from './sidebar/Sidebar';
import Main from './main/Main';

function App() {
  return (
    <div>
      <div><Header/></div>
      <div><Nav/></div>
      <div><Sidebar/></div>
      <div><Main/></div>
      <div><Footer/></div>
    </div>
  );
}

export default App;
