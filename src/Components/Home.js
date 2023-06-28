import React from "react";
import {FaRegImage,FaRegListAlt,FaRegSmile,FaCalendarCheck} from "react-icons/fa";
function Home(){
    return (
    <div className="Home">
        <div className="Home_first">
            <div className="Home_img">
                <img src="" alt="Profile"></img>
            </div>
           <div className="Home_input">
                <input type="text" className="Home_control" placeholder="What's happening?" />
           </div>
        </div>
        <div className="Home_second">
            <div className="Home_icons">
                <FaRegImage className="ic"></FaRegImage>
                <FaRegListAlt className="ic"></FaRegListAlt>
                <FaRegSmile className="ic"></FaRegSmile>
                <FaCalendarCheck className="ic"></FaCalendarCheck>
            </div>
            <div className="Home_btn">
                <a href="#id">Tweet</a>
            </div>
        </div>
    </div>
    )
}
export default Home;