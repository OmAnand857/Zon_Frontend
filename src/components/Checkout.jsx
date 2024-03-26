import React,{useEffect} from "react";
import "./style/checkout.css"
import {useContext} from "react";
import {Context,SecretContext} from "./Context.js";
import CheckoutProduct from "./CheckoutProduct.jsx";
import Subtotal from "./Subtotal.jsx";
import {UserContext} from "./Context.js";

function Checkout(){
    const userItem=useContext(UserContext);
   
    const {cart}=useContext(Context);









        return (
                <div className="checkout">
                    <div className="checkout_left">
                            <img className="checkout_ad"
                            src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                            alt=""
                            />
                            <div>
                            <h3>Hello , {userItem.helloUser}</h3>
                                <h2 className="checkout_title">Your Shopping Basket</h2>
                                {
                                    cart.map((prod)=>{
                                        return <CheckoutProduct title={prod.title}
                                        price={prod.price}
                                        rating={prod.rating}
                                        image={prod.image}
                                            id={prod.id}
                                        />
                                    })

                                }
                                {/*Basket Item*/}
                            </div>

                    </div>

                    <div className="checkout_right">
                        <Subtotal/>
                    </div>
                </div>


        );







};
export default Checkout;