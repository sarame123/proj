import logo from './logo.svg';
import './App.css';
import Navbar from './Component/Navbar/Navbar';
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Footer from './Component/Footer/Footer';
import { Route,BrowserRouter, Router, Routes, Navigate } from 'react-router-dom';
import Contact from './Component/Contact/Contact';
import OurTeam from './Component/OurTeam/OurTeam';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <div className='min-vh-100 '>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="about" element={<About/>}/>
            <Route path='contact' element={<Contact/>}/>
            <Route path='team' element={<OurTeam/>}/>
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>

        </div>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
