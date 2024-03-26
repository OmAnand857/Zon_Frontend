import React ,{useContext} from "react";
import LocationOnIcon from '@mui/icons-material/LocationOn';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import {UserContext} from "./Context";
//import {auth} from "./firebase1.js";
import {getAuth,signOut} from "firebase/auth";




function Header(){


    const {helloUser,setUser} = useContext(UserContext);

    function handleSignout(){
            
                
                if(helloUser){
                    const auth = getAuth();
                signOut(auth).then(() => { setUser("");
                    console.log("user signed out");
                    }).catch((error) => {
                         console.error(error);
                        });
                       }
                    
            
    }
            return (  <div className="navbar">
                     <Link to="/">
                             <div className="navbar_logo">
                                 <img  src="http://pngimg.com/uploads/amazon/amazon_PNG11.png" alt="Amazon logo"></img>
                            </div>
                     </Link>

                            <div className="navbar_address">
                                <div className="navbar_locationIcon"><LocationOnIcon/></div>
                                <div className="navbar_addressPara">
                                    <p>Deliver to</p>
                                    <p className="boldpara">India</p>
                                </div>
                            </div>

                            <div className="header_search">

                            <input className="header_searchbar" type="text" placeholder="Search Amazon">
                            </input>
                            <SearchIcon className="header_searchicon"/>

                            </div>

                            <div className="navbar_options">
                            <Link to= {!helloUser && "/login" } ><div  onClick={handleSignout} className= "option navbar_login">
                                            <p>Hello,{helloUser?"Sign out":"Sign in"}</p>
                                            <p className="boldpara">Account & Lists</p>

                            </div>
                            </Link>

                           <Link to={helloUser?'/Orders':'/login'}> <div className=" option navbar_returns">
                                    <p>Returns</p>
                                    <p className="boldpara">& Orders</p>
                            </div>
                        </Link>
                            <Link to="/checkout">
                            <div className=" option navbar_cart">
                                        <div className="cart_logo"><ShoppingCartIcon/></div>
                                        <div className="cart_content">
                                                <p className="boldpara">Cart</p>
                                        </div>
                            </div>
                            </Link>
                            </div>
                            

                </div>
            )
}

export default Header;