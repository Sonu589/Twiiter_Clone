import React from "react";
import {
      FaTwitter,
      FaMehBlank,
      FaHome,
      FaHashtag,
      FaUserAlt,
      FaClipboardList,
      FaRegEnvelope,
      FaRegBookmark} from "react-icons/fa";
 import { GoBell} from "react-icons/go";
function Sidebar(){
    return (
        <div className="sidebar">
          <ul>
            <li>
                <a href="id"><FaTwitter className="icons logo"/></a>
            </li>
            <li>
                <a href="#id"><FaHome className="icons logo"/>Home</a>
            </li>
            <li>
                <a href="#id"><FaHashtag className="icons"/>Explore</a>
            </li>
            <li>
                <a href="#id"><GoBell className="icons"/> Notifications</a>
            </li>
            <li>
                <a href="#id"><FaRegEnvelope className="icons"/>Messages</a>
            </li>
            <li>
                <a href="#id"><FaRegBookmark className="icons"/>Bookmarks</a>
            </li>
            <li>
                <a href="#id"><FaClipboardList className="icons"/>Lists</a>
            </li>
            <li>
                <a href="#id"><FaUserAlt className="icons"/>Profile</a>
            </li>
            <li>
                <a href="#id"><FaMehBlank className="icons"/>More</a>
            </li>
            <div className="sidebar__btn">
                <a href="#id">Profile</a>
            </div>
          </ul>
        </div>
    )
}
export default Sidebar;