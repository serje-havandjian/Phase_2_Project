import React, {useState} from "react"
import NavBar from "./NavBar"

function ChatRoom(){

    const [message, setMessage] = useState("")

    function newMessage(e) {
        setMessage(e.target.value)
        
    }

    function handleSubmit(e) {
        e.preventDefault()
        const post = document.getElementById("messageBoard")
        post.append("From you: ")
        post.append(message)
        post.innerHTML+="<br>"
        post.append(" \n From them: ")
        if (message.includes("help")) { post.append("on my way!")
        } else { post.append("hey baby ;)")
        }
        post.innerHTML+="<br>"
    }

    return(
        <div className="chatRoom">
            <NavBar />
            <h1 className="logo">_onlyDevs</h1>
            <div className="chatHeader">
                <h1>You Know How To Set State,</h1>
                <h2>Now Let's Set A Date.</h2> 
            </div>
            <div id="messageBoard"></div>
            <form className="chatForm" onSubmit={handleSubmit}>
                
                <input  
                    onChange={newMessage}
                    value={message} 
                    placeholder="Type your message here...">
                </input> 
                <button>Send</button>
            </form>
        </div>
    )
}

export default ChatRoom