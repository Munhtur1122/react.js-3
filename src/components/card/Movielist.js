import React from "react";
import "./Movielist.css"

const Movielist =  (props) =>{
    return (
<div className="Movie">
        <div className="MovieContainer">
            <div className="MovieCardContainer">
                <div className="MovieCard1">
                <div className="MovieCard1img">
                    <img src={props.img} alt="/"/>
                    </div>
                    <div className="MovieCardText">
                        <h2>{props.title}</h2>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );  
};
export default Movielist