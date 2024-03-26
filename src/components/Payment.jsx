
import React, {useState,useEffect}from "react";
import {UserContext, Context} from "./Context";
import {useContext} from "react";
import { useNavigate } from "react-router-dom";
import "./style/payment.css";
import CheckoutProduct from "./CheckoutProduct";
import {db} from "./firebase1";
import {useStripe, useElements, PaymentElement} from '@stripe/react-stripe-js';
const stripe =  require("stripe")('sk_test_51Oqg2NSHOjhcLLUqhXbsSVifJJPqH9hdiqiIN9EexqykH39N2Xshs6BhzKuR1C9Ns1Y1me21FioVjXAgm5d6LJM0003mB3SIMs');

function Payment(){

        const {helloUser}=useContext(UserContext);
        const {cart,setCart}=useContext(Context);
        const Navigate=useNavigate();
        const [processing,setProcessing]=useState(false);

        let subtotal=0;
for(var i=0;i<cart.length;i++){
    subtotal=subtotal+cart[i].price;
}

const stripe = useStripe();
const elements = useElements();

const handleSubmit = async (event) => {
  // We don't want to let default form submission happen here,
  // which would refresh the page.
  event.preventDefault();

  if (!stripe || !elements) {
    // Stripe.js hasn't yet loaded.
    // Make sure to disable form submission until Stripe.js has loaded.
    return;
  }

  const result = await stripe.confirmPayment({
    //`Elements` instance that was used to create the Payment Element
    elements,
    confirmParams: {
},
redirect: 'if_required'
  });
  console.log(result);

  if (result.error) {
    // Show error to your customer (for example, payment details incomplete)
    console.log(result.error.message);
    setProcessing(false);
  } else {

       if(helloUser){db
        .collection('users')
        .doc(helloUser)
        .collection('orders')
        .doc(result.paymentIntent.id)
        .set({
                basket:cart,
                amount:result.paymentIntent.amount,
                created:result.paymentIntent.created
        })} 
        setProcessing(false);
        setCart([]);
        Navigate('/Orders');
    // Your customer will be redirected to your `return_url`. For some payment
    // methods like iDEAL, your customer will be redirected to an intermediate
    // site first to authorize the payment, then redirected to the `return_url`.
  }
};












        return (
        <div className="payment_page">
                <div className="payment_section">
                        <div className="payment_title">
                                <h3>Delivery Address</h3>
                        </div>
                        <div className="delivery-address">
                                <p>{helloUser}</p>
                                <p>Kankar Bagh</p>
                                <p>Delhi , 34273</p>
                        </div>
                </div>
                <div className="payment_section">
                        <div className="payment-title">
                        <h3>Review Items & Delivery</h3>
                        </div>
                        <div className="payment_items">
                        {
                                cart.map(item=><CheckoutProduct
                                image={item.image}
                                title={item.title}
                                id={item.id}
                                rating={item.rating}
                                price={item.price}
                                />
                                )
                        }
                        </div>

                </div>
                <div className="payment_section">
                        <div className="payment_title">
                                <h3>Payment Method</h3>
                        </div>
                        <div className="payment_method">
                        <form onSubmit={handleSubmit}>
                                  <PaymentElement/>
                                         <button onClick={()=>{setProcessing(true)}} disabled={!stripe&&processing}>{processing?'processing just 1 sec':'Buy Now'}</button>
                        </form>
                        <strong>₹{subtotal}</strong>
                        </div>
                </div>
        </div>
        );
}

export default Payment;