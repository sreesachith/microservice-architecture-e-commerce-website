import './App.css';
import { Routes,Route } from 'react-router-dom';
import Home from './pages/home.js'
import Landing from './pages/landing.js'
import About from './pages/about.js'
import Info from './pages/info.js'
import Cart from './pages/Cart.js'
import Login from './pages/page.jsx'
import Register from './pages/Regpage.js'

function App() {
  return (

    <Routes>
      <Route path='/' element={<Landing/>}/>
      <Route path='home' element={<Home/>}/>
      <Route path='about' element={<About/>}/>
      <Route path='home/info' element={<Info/>}/>
      <Route path='home/cart' element={<Cart/>}/>
      <Route path="Login" element={<Login/>}/>
      <Route path='register' element={<Register/>}/>
    </Routes>
    
    
  );
}

export default App;
