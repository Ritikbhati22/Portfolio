import logo from './logo.svg';
import './App.css';
import Navbar from './componant/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import {BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Header from './pages/Header';
function App() {
  return (
    <div className=' bg-gray-900  h-screen overflow-auto'> 
   <Router>
   <Navbar />
   <Routes>
    <Route path = "/" element={<Home />}/>
    <Route path="/about" element={<About />}/>
   <Route path = "/projects" element={<Projects />}/>
   </Routes>
</Router> 
<Header /> 
   </div> 

   
  );
}

export default App;
