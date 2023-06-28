import React from "react";
import Home from "./Home";
import Posts from "./Posts"
function Tweets(){
    return (
        <div className="Post">
            <div className="Post_home">
                Home
            </div> 
            <Home />
            <Posts />
           
        </div>
    )
}
export default Tweets; 