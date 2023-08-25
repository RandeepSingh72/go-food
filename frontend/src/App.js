import './App.css';
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "bootstrap/dist/css/bootstrap.min.css";

//import Routes
import { Routes, Route  } from 'react-router-dom';
//import screen
import Home from './screen/Home';
import Login from './screen/Login';
import Footer from './components/Footer';
import Signup from './screen/Signup';
import Navbar from './components/Navbar';
import { CartProvider } from './components/ContextReducer';
import MyOrder from './screen/MyOrder';

function App() {
  return (
    <div className="App text-white bg-dark">
      <CartProvider>
      <Navbar/>
      <Routes>
        <Route exact path='/' element={<Home/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
        <Route path='/createuser' element={<Signup/>}></Route>
        <Route path='/myOrderData' element={<MyOrder/>}></Route>
      </Routes>
      <Footer/>
      </CartProvider>
    </div>
  );
}

export default App;
