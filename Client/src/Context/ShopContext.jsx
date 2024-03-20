import React, { createContext, useState,useEffect } from "react";
import all_product from "../Components/Assets/all_product";
import axios from "axios";
export const ShopContext = createContext(null);



const getDefaultCart = () => {
  let cart = {};
  for (let index = 0; index < 400; index++) {
    cart[index] = 0;
  }
  return cart;
};

const ShopContextProvider = (props) => {
  

  const [cartItems, setCartItems] = useState(getDefaultCart());


  const addToCart = (itemId) => {
    console.log(itemId)
    const response=axios.post("http://localhost:8080/addtocart",{
      productId:itemId,
      custId:1,
      quantity:1
    })
    console.log(response.data);
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
  };
  const removeFromCart = (itemId) => {
    const response=axios.post("http://localhost:8080/removefromcart",{
      productId:itemId,
      custId:1,
      quantity:0
    })
    console.log(response.data);
    setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
  };

  const [isLoggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [totalamount,setTotalamount]=useState(0);

  const login = () => {
    setLoggedIn(true);
  };

  const logout = () => {
    setLoggedIn(false);
    setCartItems(getDefaultCart());
    setEmail("")
    setPassword("")
    setUsername("")
  };

  const getCartContents = () => {
    const cartContents = [];

    Object.keys(cartItems).forEach((itemId) => {
      const quantity = cartItems[itemId];

      if (quantity > 0) {
        const product = all_product.find(
          (item) => item.id === parseInt(itemId, 10)
        );

        if (product) {
          cartContents.push({
            product,
            quantity,
            email,
            totalamount
          });
        }
        try {
          const response =  axios.post("http://localhost:8080/purchase", {
            customer_mail:email,
            total_amount:totalamount
          });
    
          console.log(response.data);
          login();
          alert("Ordered Confirmed");
          
        } catch (error) {
          alert("Error placing order");
          console.error("Error during login:", error.message);
        }

        console.log(cartContents);
      }
      // alert("Order Confirmed");
    });
    console.log(cartContents);

    return cartContents;
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    all_product.map((e) => {
      
      if (cartItems[e.id] > 0) 
        totalAmount += e.new_price * Number(cartItems[e.id]);
      
    });
    setTotalamount(totalAmount);
    return totalAmount;
  };
  
  const getTotalCartItems = () => {
    let totalItem = 0;
    all_product.map((e) => {
      if (cartItems[e.id] > 0) {
        totalItem += Number(cartItems[e.id]);
      }
    });

    return totalItem;
  };
  // const [product,setProduct]=useState([]);
  // // const { setAllProduct } = useContext(ShopContext);   

  // useEffect(()=>{
  //   console.log("useeffect log");
  //   var getTodo = async() =>{
  //     await axios.get('http://localhost:8080/allproducts')
  //   .then((response)=>{
  //     //console.log(response)
  //     // setAllProduct(response.data);
  //     setProduct(response.data);
  //     // console.log(response.data[0].productName);
  //     // console.log(product);
  //   })
  //   .catch((error)=>{ 
  //     console.log('Error fetching the data: ',error);
  //   })
  //   }
  //   getTodo()
  // },[])
  const contextValue = {
    all_product,
    cartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    getTotalCartItems,
    getCartContents,
    isLoggedIn,
    login,
    logout,
    username,
    email,
    password,
    setEmail,
    setUsername,
    setPassword,
    setLoggedIn
  };

  
  return (
    
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};
export default ShopContextProvider;
