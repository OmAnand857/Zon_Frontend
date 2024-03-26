import React from "react";
import "./style/subtotal.css"
import { useContext } from "react";
import {Context, UserContext} from "./Context";
import {useNavigate} from "react-router-dom";



function Subtotal(){
       
        const {helloUser}=useContext(UserContext);
        const navigate=useNavigate();
const item=useContext(Context);
let subtotal=0;
for(var i=0;i<item.cart.length;i++){
    subtotal=subtotal+item.cart[i].price;
}

                function handleClick(){
                        if(helloUser){
                                if(subtotal===0){
                                        navigate('/');
                                }
                                else{
                                        navigate('/payment')
                                        }
                        }
                        else{
                                navigate('/login');

                        }
                }

        return (
                <div className="Subtotal">
                        <h2>Subtotal({item.cart.length} items):<strong>INR {subtotal}</strong></h2>
                        <input type="checkbox" id="gift"/>
                        <lable for="gift">This item contains a gift</lable>
                        <button onClick={handleClick} className="Subtotal_button">{subtotal===0&&helloUser?'Buy Something':'Proceed to checkout'}</button>
                </div>



        )


}
export default Subtotal;