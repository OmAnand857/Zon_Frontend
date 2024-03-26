import React,{useState,useContext,useEffect} from "react";
import {db} from "./firebase1";
import { UserContext } from "./Context";
import Order from "./Order";
import "./style/orders.css";

function Orders(){


                const {helloUser}=useContext(UserContext);
                const [orders,setOrders]=useState([]);

                useEffect(()=>{
                        if(helloUser){
                                db
                                .collection('users')
                                .doc(helloUser)
                                .collection('orders')
                                .orderBy('created','desc')
                                .onSnapshot(snapshot=>(
                                        setOrders(snapshot.docs.map(doc=>({
                                                id:doc.id,
                                                data:doc.data()
                                        })))
                                ))
                        }
                        else{
                                setOrders([])
                        }
                },[])
                        console.log(orders);



                return (


                        <div className='orders'>
                        <h1>Your Orders</h1>
                        <div className='orders_order'>
                        {orders?.map(order=>(
                                <Order order={order}/>
                        ))}
                        </div>
                        
                        
                        
                        </div>
                        
                        

                )

};


export default Orders;