import React, { useContext, useEffect, useState ,useHistory} from "react";
import "./Navbar.css";
import logo from "../Assets/logo.png";
import cart_icon from "../Assets/cart_icon.png";
import { Link, useNavigate } from "react-router-dom";
import { ShopContext } from "../../Context/ShopContext";
import axios from 'axios';
const Navbar = () => {
  const [menu, setMenu] = useState("shop");
  const { getTotalCartItems, email, isLoggedIn,logout,setLoggedIn } = useContext(ShopContext);
  const [keyword,setKeyword]=useState("");

  const navigate = useNavigate()
  const searchHandle =  () => {
    

    try {
      const response =  axios.get(`http://localhost:8080/search/${keyword}`).
      then(response => {
        console.log(response.data[0].productId);
        navigate(`/product/${response.data[0].productId}`);
      
        
       
      })
      .catch(error => {
        console.log(error);
      });

      console.log(response);
      
      // alert("Successfully Logged In!!!");
      
    } catch (error) {
      // alert("Invalid Credentials");
      console.error("Error during login:", error.message);
    }
  };
 
  return (
    <div className="navbar">
      <div className="nav-logo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqsdpbaVWoM-9zgJAbXQiaCQ7cBXF5q5CoQjpMzCZLIQ&s"
          alt=""
        />
        <p>CooperKart</p>
      </div>
      
     { (email==="admin@cooperkart.com") ? null: <ul className="nav-menu">
      <input placeholder="Type here for search" onChange={(e)=>{setKeyword(e.target.value)}} className="Search"></input>
      <button className="search-btn" onClick={()=>searchHandle()}>Search</button>
        <li
          onClick={() => {
            setMenu("shop");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/">
            Shop
          </Link>{" "}
          {menu === "shop" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Men");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/Men">
            Men
          </Link>{" "}
          {menu === "Men" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Women");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/Women">
            Women{" "}
          </Link>
          {menu === "Women" ? <hr /> : <></>}
        </li>
        <li
          onClick={() => {
            setMenu("Kids");
          }}
        >
          {" "}
          <Link style={{ textDecoration: "none" }} to="/Kids">
            Kids
          </Link>{" "}
          {menu === "Kids" ? <hr /> : <></>}
        </li>
      </ul>
     
     
      }
      <div className="nav-login-cart">
        {email ?(
          email == "admin@cooperkart.com" ? (
            <>
            {console.log(email)}
            <Link style={{ textDecoration: "none" }} to="/signup">
                {" "}
                <button onClick={logout}>Logout</button>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/addproducts">
              <button>Add products</button>
              </Link>
            </>
          ) : (
            <>
              <Link style={{ textDecoration: "none" }} to="/signup">
                {" "}
                <button onClick={logout}>Logout</button>
              </Link>
              <Link style={{ textDecoration: "none" }} to="/cart">
                <img src={cart_icon} alt="" />{" "}
              </Link>
              <div className="nav-cart-count">{getTotalCartItems()}</div>
            </>
          )
        ) : (
          <Link style={{ textDecoration: "none" }} to="/login">
            {" "}
            <button>Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
