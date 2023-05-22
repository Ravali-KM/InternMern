import logo from './logo.svg';
import './App.css';
import Body from './Body/Body';
import Footer from './Footer/Footer';
import RoundedRectangle from './RoundedRectangle/rr';

function App() {
  return (
    <div className="App">
      <RoundedRectangle/>
      <Body/>
      <Footer/>
    </div>
  );
}

export default App;
