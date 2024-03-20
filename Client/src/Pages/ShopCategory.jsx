import React,{ useContext, useEffect, useState } from 'react'
import './CSS/ShopCategory.css'
import {ShopContext} from '../Context/ShopContext'
import dropdown_icon from '../Components/Assets/dropdown_icon.png'
import Item from '../Components/Item/Item'
import axios from 'axios';
import img from '../Components/Assets/p1_product_i1.png'

const ShopCategory = (props) => {

  const {all_product} = useContext(ShopContext);
  
  const [product,setProduct]=useState([]);
  // const { setAllProduct } = useContext(ShopContext);   

  useEffect(()=>{
    console.log("useeffect log");
    var getProducts = async() =>{
      await axios.get('http://localhost:8080/allproducts')
    .then((response)=>{
      //console.log(response)
      // setAllProduct(response.data);
      setProduct(response.data);
      // console.log(response.data[0].productName);
      // console.log(product);
    })
    .catch((error)=>{ 
      console.log('Error fetching the data: ',error);
    })
    }
    getProducts()
  },[])
  return ( 

    <div className='shopcategory'>
      <img className= "shopcategory-banner"src={props.banner} alt='' />
      
      <div className="shopcategory-products">
        {product.map((item,i)=>{
            if(props.category === item.category)
            {
              console.log(item.productName);
              return <Item key = {i} id={item.productId} name={item.productName} image={img} new_price={item.price} old_price = {item.description}/>
            }
            else{
              return null;
            }
        })}
      </div>
     
    </div>
  )
}

export default ShopCategory
