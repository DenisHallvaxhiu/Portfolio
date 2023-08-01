import './App.css';
import Background from "./assets/Blue Ribbon Window 11.jpg"
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='app'>
      <img src={Background}/>
      <Footer/>
    </div>
  );
}

export default App;
