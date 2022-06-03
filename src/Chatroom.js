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
        // help & JavaScript
        if (message.toLowerCase().includes("JavaScript").toLowerCase()) { post.append("I know JS, but my help ain\'t cheap. What will you do for me in return?")
        } else if (message.toLowerCase().includes("React").toLowerCase()) { post.append("React?! that\'s easy! you really need my help?")
        } else if (message.toLowerCase().includes("Ruby").toLowerCase()) { post.append("Sorry, haven\'t learned Ruby yet. you\'re on your own, pal!")
        } else if (message.toLowerCase().includes("anything").toLowerCase()) { post.append("Sounds about right.")
    }
        else { post.append("hey baby ;)")
        }

    
        
        post.innerHTML+="<br>"
        setMessage("")
    }

    return(
        <div className="chatRoom">
            <NavBar />
            <div className="logo">
                <h1>_onlyDevs</h1>
                <h5>Think Farmers Only... <br/>Only Less Shitty</h5>
            </div>
            <div className="chatHeader">
                <h1>You Know How To Set State,</h1>
                <h2>Now Let's Set A Date.</h2> 
            </div>
            <div id="messageBoard"></div>
            <form className="chatForm" onSubmit={handleSubmit}>
                
                <input  
                    id="messageBox"
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