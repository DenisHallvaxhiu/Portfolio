import './App.css';
import Background from "./assets/Blue Ribbon Window 11.jpg"
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

function App() {
  return (
    <div className='app'>
      <img src={Background}/>
      <Main/>
      <Footer/>
    </div>
  );
}

export default App;
