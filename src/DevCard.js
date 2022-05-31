import React, { useState } from "react"
import {useHistory} from "react-router-dom"


function DevCard({name, image, field, like, handleClick}){

    const history= useHistory()

    const [buttonImage, setButtonImage] = useState(false)

    const unliked = "♡"
    const liked = "💙"

    function handleButtonImage(){
        setButtonImage(!buttonImage)

        if(like === true){
           return alert(`OMGS! You and ${name} matched!  Send them a message! `), history.push("/Chatroom")
        }

        //CONSIDER A FLASH MESSAGE INSTEAD?
        //DELETE PROFILE ONCE YOU'RE SATISFIED

    }

    const test = "https://a.slack-edge.com/production-standard-emoji-assets/13.0/apple-large/2665-fe0f.png"


    return(
        <div className="card"> 
            <img className="image" src={image}/>
            <div class="container">
                 <h1>{name}</h1>
                <h3>{field}</h3>
                <button onClick={handleButtonImage}>{buttonImage ? liked : unliked}</button>
            </div>
        </div>
    )
}

export default DevCard