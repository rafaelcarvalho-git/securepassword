import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/pages/Home'
import Tips from './components/pages/Tips';
import TestPassword from './components/pages/TestPassword'
import GeneratePassword from './components/pages/GeneratePassword'

function App() {
  return (
    <Router>
           
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />} />       
        <Route path='/testpassword' element={<TestPassword />} />    
        <Route path='/generatepassword' element={<GeneratePassword />} />   
        <Route path='/tips' element={<Tips />} />              
      </Routes>      
      <Footer />
      
    </Router>  
  );
}

export default App;