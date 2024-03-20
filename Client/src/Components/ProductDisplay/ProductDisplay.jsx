import React, { useContext, useEffect, useState } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assets/star_icon.png'
import star_dull_icon from '../Assets/star_dull_icon.png'
import { ShopContext } from '../../Context/ShopContext'
import img from '../Assets/product_2.png'
import axios from 'axios'
const ProductDisplay = ({product}) => {
  console.log(product)
 const [products,setProducts]=useState()
 const {addToCart} = useContext(ShopContext);
//  useEffect(()=>{
//   console.log("useeffect log");
//   var getProducts = async() =>{
//     await axios.get('http://localhost:8080/allproducts')
//   .then((response)=>{
//     //console.log(response)
//     // setAllProduct(response.data);
//     setProducts(response.data);
//     // console.log(response.data[0].productName);
//     // console.log(product);
//   })
//   .catch((error)=>{ 
//     console.log('Error fetching the data: ',error);
//   })
//   }
//   getProducts()
// },[])
  return (
    <div className='productdisplay'>
     <div className="productdisplay-left">
      <div className="productdisplay-img-list">
        
        <img src={img} alt=""/>
        <img src={img} alt=""/>
        <img src={img} alt=""/>
        <img src={img} alt=""/>
      </div>
      <div className="productdisplay-img">
        <img className="productdisplay-main-img" src={img} alt = ""/>
      </div>
     </div>
     <div className="productdisplay-right">
        < h1>{product.productName}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt=""/>
          <img src={star_icon} alt=""/>
          <img src={star_icon} alt=""/>
          <img src={star_icon} alt=""/>
          <img src={star_dull_icon} alt=""/>
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
           
            <div className="productdisplay-right-price-new">
              Rs.{product.price}
            </div>
        </div>
        <div className="productdisplay-right-description">
          {product.description}
        </div>
        <div className="productdisplay-right-size">
          <h1>Select Size</h1>
            <div className="productdisplay-right-sizes">
              <div>S</div>
              <div>M</div>
              <div>L</div>
              <div>XL</div>
              <div>XXL</div>
            </div>
        </div>{product.quantity>0?<button onClick={()=>{addToCart(product.productId)}}>ADD TO CART</button>:<button className='productdisplay-right-sizes out-of-stock'>Out of Stock</button>}
        {/* <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button> */}
        {/* {console.log(product.id)}; */}
        <p className='productdisplay-right-category'><span>Category : </span> Women,Tshirt,  Crop Top</p>
        <p className='productdisplay-right-category'><span>Tags : </span> Modern, Latest</p>
      </div>
     </div>
    
  )
}

export default ProductDisplay
