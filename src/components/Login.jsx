import React,{useState} from "react";
import "./style/login.css";
import {Link,useNavigate} from "react-router-dom";
import {auth} from "./firebase1.js";
import {UserContext} from "./Context.js";
import {useContext} from "react";
function Login(){


  const {helloUser,setUser} =useContext(UserContext);
  console.log("ye aaya item context se",helloUser,setUser);
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");
const navigate=useNavigate();

function handleSignIn(e){
            e.preventDefault();
            
           auth.signInWithEmailAndPassword(email, password)
  .then((userCredential) => {
    // Signed in 
    
    const user = userCredential.user;
    console.log("usercredential.useron sign in",user)
    setUser(user.email);

    console.log("state wala user",helloUser);
    if(userCredential){
        navigate("/");
    }
    // ...
  })
  .catch((error) => {
    
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorCode,errorMessage);
  });


}

function handleRegister(e){
    e.preventDefault();
   
   auth.createUserWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed up 
      const user=userCredential.user;
      setUser(user.email);
      navigate("/");
      
      console.log(userCredential);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode,errorMessage);
      // ..
    });
}




return (
        <div className="Login">
        <Link to="/">
                <img className="Login_logo" src="https://th.bing.com/th/id/OIP.Ku4iy6JfyZOZAKxOkfp0ewHaEK?rs=1&pid=ImgDetMain" alt=""></img>
        </Link>
                <div className="Login_box">
                    <form>
                        <h4>Sign In</h4>
                        <h5>E-mail </h5>
                        <input onChange={e=>setEmail(e.target.value)}  value={email} type="text"/>
                        <h5>Password</h5>
                        <input onChange={e=>setPassword(e.target.value)} value={password} type="password"/>
                        <button type="submit" onClick={handleSignIn} className="signin">Sign In</button>
                        <p>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</p>
                        <button onClick={handleRegister}>Create your Amazon Account</button>
                       
                    </form>
                </div>
        </div>


);
}

export default Login;