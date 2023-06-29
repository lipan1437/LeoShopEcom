
import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Products from './Pages/Products';
import Singleproduct from './Pages/Singleproduct';
import Cart from './Pages/Cart';
import Errorpage from './Pages/Errorpage';
function App() {
  return (
    <BrowserRouter>
            <h1>Welcome to Leo Shop E-Commerce Website</h1>
            <Routes>
             <Route path='/' element={<Home/>} />
             <Route path='/about' element={<About/>} />
             <Route path='/products' element={<Products/>} />
             <Route path='/contact' element={<Contact/>} />
             <Route path='/singleproduct/:id' element={<Singleproduct/>} />
             <Route path='/cart' element={<Cart/>} />
             <Route path='*' element={<Errorpage/>} />
            </Routes>
    </BrowserRouter>
  );
}

export default App;
