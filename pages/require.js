import { useState, useEffect } from "react";
import RequireForm from "./components/requirement/create";
import ListFrom from "./components/requirement/list";
import NavRequriement from "./components/requirement/nav";

export default function Require(){
    const [path, setPath] = useState(null);
    const onClick = (event) =>{
        setPath(event.target.id);
    }

    useEffect(()=>{},[])
    
    return (
        <div className="container">
            <NavRequriement moves={onClick} />
            {
                
                path === "add" ? 
                    <RequireForm /> 
                : 
                    <ListFrom />
            }

        </div>
    );
}