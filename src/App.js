import Navbar from './Components/Navbar'
import './App.css';
import{BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Home from "./Pages/Home"
import Footer from './Components/Footer';
import ContactUs from './Pages/ContactUs';
import About from './Pages/About';
import Menu from './Pages/Menu';
import ThankYou from './Components/ThankYou';

function App() {
  return (
    <div className="App">
      <Router>
    <Navbar />
    
    <Routes >
      <Route path='/' exact Component={Home} />
      <Route path='/contactus' exact Component={ContactUs} />
      <Route path='/about' exact Component={About} />
      <Route path='/menu' exact Component={Menu} />
      <Route path='/thanks' exact Component={ThankYou} />
    </Routes>
    <Footer />
    </Router>
    </div>
  );
}

export default App;
