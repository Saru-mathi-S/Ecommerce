import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Cart from  './Pages/Cart';
import ShopCategory from  './Pages/ShopCategory';
import Shop from  './Pages/Shop';
import LoginSignup from  './Pages/LoginSignup';
import Product from  './Pages/Product';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png'
import kid_banner from './Components/Assets/banner_kids.png'
import Login from './Pages/Login';
import React from 'react';
import ManageProducts from './Pages/ManageProducts';
import AddProduct from './Pages/AddProduct';
 
function App() {
  return (
    <div >
      <BrowserRouter>
        <Navbar />
        <Routes>
       
          <Route path='/' element={<Shop/>}/>
          <Route path='/Men' element={<ShopCategory  banner ={men_banner} category = "men"/>}/>
          <Route path='/Women' element={< ShopCategory banner ={women_banner} category = "women"/>}/>
          <Route path='/Kids' element={<ShopCategory banner ={kid_banner} category = "kid"/>}/>
          <Route path='/product' element={<Product/>}/>
          <Route path='/manageproducts' element = {<ManageProducts/>}/>
          <Route path='/addproducts' element = {<AddProduct/>}/>
            <Route path='/product/:id' element = {<Product/>}/>
            <Route path='/cart' element = {<Cart/>}/>
            <Route path='/signup' element = {<LoginSignup/>}/>
            <Route path='/login' element = {<Login/>}/>
 
        </Routes>
        <Footer/>
        </BrowserRouter>
     
    </div>
  );
}
 
export default App;