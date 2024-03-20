import React,{ useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import { useParams } from 'react-router-dom';
import Breadcrums from '../Components/Breadcrums/Breadcrums';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay';
import Description from '../Components/Description/Description';
import RelatedProducts from '../Components/RelatedProducts/RelatedProducts';
import axios from 'axios';
import { useEffect, useState } from 'react'
const Product = () => {
  const [product,setProduct]=useState([]);
  const [currentProduct, setcurrentProduct] = useState(null)
  const {id} = useParams();
  console.log(id) 
  useEffect(()=>{
    console.log("useeffect log");
    const getProducts = async() =>{
     axios.get('http://localhost:8080/allproducts')
    .then((response)=>{
      setProduct(response.data);
    })
    .catch((error)=>{ 
      console.log('Error fetching the data: ',error);
    })
    }
    console.log(product)
    getProducts()
  },[])

useEffect(() => {
  const temp= product.find((e)=> e.productId==id) 
  setcurrentProduct(temp)
  console.log(currentProduct)
}, [product])


  const {all_product} = useContext(ShopContext);



  
  
  //console.log(productObj);

if(currentProduct == null) return <div>loading</div>

  return (
    <div>
      
       <Breadcrums product = {currentProduct}/>
      <ProductDisplay product = {currentProduct}/>
      <Description/>
      <RelatedProducts/>
      <hr />
    </div>
     
 
  )
}

export default Product
