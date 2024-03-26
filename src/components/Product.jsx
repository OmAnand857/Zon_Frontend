import React, {useContext} from "react";
import "./style/products.css";
import "./Home"
import {Context} from "./Context.js";

function Product( props){
          const item=useContext(Context);              
            console.log(item);

        return (
                    <div className="home_product">
                            <div className="product_info">
                                        <p>{props.title}</p>
                                        <p className="product_price"><small>₹</small><strong>{props.price}</strong></p>
                            <div className="product_rating">
                                   {Array(props.rating).fill().map((_,index)=>{
                                        return <p>⭐</p>
                                   })}
                                    
                                    
                            </div>
                            </div>
                            <img className="product_image" src={props.image} alt=""></img>
                            <button onClick={()=>{item.setCart([...item.cart,props])}}>Add to Basket</button>
                    </div>


        );


}

export default Product;