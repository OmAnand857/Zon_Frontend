import React,{useState,useEffect,useContext} from "react";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import Login from "./Login";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Payment from "./Payment";
import axios from "./axios";
import { Context, SecretContext, UserContext } from "./Context";
import Orders from "./Orders";
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_test_51Oqg2NSHOjhcLLUqN9UUWvzHgFcSDRkSkZ1sxYsp53TlGg075ylj4bQNrpFyxG3SnVk5lgYUEb5JLLZ7MNDzQbL100tQg9he3y');


function App(){

  const {cart}=useContext(Context);

const [options,setOptions]=useState({
  clientSecret:''
});
  let subtotal=0;
  for(var i=0;i<cart.length;i++){
      subtotal=subtotal+cart[i].price;
  }
  
          //const stripe = useStripe();
          //const elements = useElements();
  
          const [clientSecret,setClientSecret]=useState(null);
  
          useEffect(()=>{
                          //generate the client secret that allows us to charge the customer
                          const getClientSecret=async ()=>{
                                          const response= await axios({
                                                  method:'post',
                                                  url:`/payments/create?total=${subtotal*100}`
  })
                                          setClientSecret(response.data.clientSecret);
                                          console.log('yeh hai axios se respose',response);
                                  }
                              if(subtotal!==0){getClientSecret()}    
                               ;
          },[cart,subtotal])

       useEffect(()=>{
          setOptions({
            // passing the client secret obtained from the server
            clientSecret: clientSecret,
          })

       },[clientSecret])  


  /*const options = {
    //passing the client secret obtained from the server
    clientSecret: '{{CLIENT_SECRET}}',
 };*/
    
        return (
            <Router>
            <div>
                
           
            <Routes>


          <Route path="/login" element={<Login/>}>
          </Route>
          <Route path="/payment" element={<><Header/><Elements stripe={stripePromise} options={options}><Payment/></Elements></>}>
          </Route>
            <Route path="/checkout" element={<><Header/><Checkout/></>}>
            
            </Route>
            
            <Route path="/" element={<><Header/><Home/></>}>
            </Route>
            <Route path='/Orders' element={<><Header/><Orders/></>}>
            </Route>
           
            
            </Routes>
            
            
            </div>
            </Router>
        )
}

export default App;