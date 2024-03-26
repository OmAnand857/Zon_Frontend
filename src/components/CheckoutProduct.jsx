import React from "react";
import "./style/checkoutproduct.css";
import {useContext} from "react";
import { Context} from "./Context";
function CheckoutProduct(props){
    const item=useContext(Context);
   
    function handleRemove(){
        
            item.setCart(prevValue=>{
                return prevValue.filter((prod)=>{
                                return prod.id!==props.id;
                })
            })
        }
            
        
    
        return (
                    <div className="CheckoutProduct">
                        <div className="CheckoutImage">
                            <img src={props.image} alt=""></img>
                        </div>
                        <div className="CheckoutDetails">
                                <div className="Title">
                                    <p><h2>{props.title}</h2></p>
                                </div>
                                <div className="RatingPrice">
                                       <span><small>₹</small><strong>{props.price}</strong></span> 
                                        <div className="Rating">
                                        {Array(props.rating).fill().map((_,index)=>{
                                        return <p>⭐</p>
                                   })}
                                        </div>
                                </div>
                                   {!props.hiddenButton&&(                                <button onClick={handleRemove}>Remove from Basket</button>
)}
                        </div>
                        


                    </div>







        )

}
export default CheckoutProduct;