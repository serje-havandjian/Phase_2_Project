import React from "react";
import NavBar from "./NavBar";

function About(){
    return (
        <div className="about"> 
            <NavBar />
            <div className="logo">
                <h1>_onlyDevs</h1>
                <h5>Why Ask Stackoverflow...? <br/>When You Can Ask A _Dev?</h5>
            </div> 
            <div className="aboutCardsContainer">
                <div className="aboutCards">
                    <img className="image" src="https://scontent-dfw5-1.xx.fbcdn.net/v/t1.6435-9/42111145_2455299614487225_2916440711341539328_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=pRIMuaGia4IAX9EV8Gu&_nc_ht=scontent-dfw5-1.xx&oh=00_AT84xPLxbRZs3vdecxpMvzGT20gc9AC2cUFsFJWVZhkrLA&oe=62BCA093"/>
                    <div class="container">
                        <h1>Ross</h1>
                        <h3>Software Engineer</h3>
                    
                    </div>
                </div>
                <div className="aboutCards">
                    <img className="image" src="https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC4E03AQGHX_tyPCYKTA%2Fprofile-displayphoto-shrink_200_200%2F0%2F1517370452369%3Fe%3D1659571200%26v%3Dbeta%26t%3D36LclVdSFcCxIwhxGP2SwEUC32FCR4kc8u9H_HoChYI"/>
                    <div class="container">
                        <h1>Serje</h1>
                        <h3>Software Engineer</h3>
                    </div>
                </div>
            </div>
            <p id="aboutUs"> 
            Meet our founders: Ross Garfield and Serje Havandjian.  Ross and Serje built _onlyDevs while at Flatiron School.  _onlyDevs is a prototype marketplace platform where developers can connect with other developers, professionals, and prospective clients.<br></br>
            
            _onlyDevs models creating a profile, interacting with current _onlyDevs users, and entering a chatroom with a connection.  Lastly, _onlyDevs highlights Ross' and Serje's skills with React, JSON servers, CSS, and projecting hosting through Heroku.
            </p>
        </div>
     
    )
}

export default About