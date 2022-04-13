import { useState, useEffect } from "react";
import Signin from "./components/user/signin";
import Signup from "./components/user/signup";

export default function User(){
   
    const [path, setPath] = useState("signin");
    
    const changePath = (event) => {
        setPath(event.target.name);
    }

    useEffect(()=>{
        changePath
    },[path])

    let form = null;

    if(path === "signup"){
        form = <Signup changePath={changePath} />
    }else if(path === "mypage"){
        form = <div>mypage</div>
    }else{
        form = <Signin changePath={changePath} />
    }
    

    return (
        <div>
            {form}  
        </div>
    );
}