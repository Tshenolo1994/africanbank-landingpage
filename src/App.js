
import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Navbar from "./components/Navbar"
// import Header from "./components/Header"
// import Services from './components/Services';
// import About from "./components/About"
// import Loan from './components/Loan';
// import OtherServices from './components/OtherServices';
// import Karabo from './components/Karabo';
import Footer from "./components/Footer"
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Comparison from './pages/Comparison';

function App() {
  return (
 
    <ChakraProvider>
      <Router>
    <Navbar />
    <Routes>
      <Route exact path='/' element={<Home />}/>
      <Route  path='/comparison' element={<Comparison />}/>
    </Routes>
<Footer />
</Router>
    </ChakraProvider>
    
  );
}

export default App;
