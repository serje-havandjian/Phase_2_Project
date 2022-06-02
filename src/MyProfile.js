import React, { useState } from "react"
import NavBar from "./NavBar"

function MyProfile({currentUser}){
    
    const [showCard, setShowCard] = useState(true)
    const [finalMessage, setFinalMessage] = useState(false)
    const {id, name, image, field} = currentUser

    function handleDeleteProfile() {
        fetch(`http://localhost:3000/devs/${id}`, {
            method: "DELETE"
        })
        setShowCard(!showCard)
        setFinalMessage(!finalMessage)
    }
  

    return(
        
            <div className="myProfile">
                <NavBar />
                <div className="logo">
                    <h1>_onlyDevs</h1>
                    <h5>Think Farmers Only... <br/>Only Less Shitty</h5>
                </div>
                {showCard ? <div className="profileCard">
                    <div className="card"> 
                        <img className="image" src={image}/>
                        <div class="container">
                            <h1>{name}</h1>
                            <h3>{field}</h3>
                            <button 
                                onClick={handleDeleteProfile}
                                className="trashButton">
                                🗑️
                            </button>
                        </div>
                    </div>
                </div> : null}
                {finalMessage ? <div className="finalMessage">
                    <h1>Thanks for choosing onlyDevs!</h1>
                </div> : null}
            </div>
        
    )
}

export default MyProfile