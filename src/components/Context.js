import React , {createContext , useState} from "react";

export const Context=createContext(null);

export const ContextProvider=(props)=>{
    const [cart , setCart]=useState([]);
    return <Context.Provider value={{cart,setCart}}>
        {props.children}
    </Context.Provider>
    
}

export const UserContext=createContext(null);

export const  UserContextProvider=(props)=>{
    const [helloUser,setUser]=useState('');
    return <UserContext.Provider value={{helloUser,setUser}}>
        {props.children}
    </UserContext.Provider>
}


