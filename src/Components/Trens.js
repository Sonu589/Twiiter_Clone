import React from "react";
import {FaSistrix} from "react-icons/fa"
import Trend from "./TrendKeyword"
function Trens(){
    return (
        <div className="trends">
            <div className="trends_search">
            <input type="text" className="trends_control" placeholder="Search Twitter"/>
                <div className="trend_icon">
                    <FaSistrix className="search" />
                </div>
            </div>
            <Trend />
        </div>
    );
}
export default Trens;