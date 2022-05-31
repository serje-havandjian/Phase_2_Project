import React, { useState } from "react"
import {useHistory} from "react-router-dom"

function CreateProfile(){
    const history = useHistory()

    const [devName, setDevName] = useState("")
    const [devImage, setDevImage] = useState("https://180dc.org/wp-content/uploads/2022/04/Blank-Avatar.png")
    const [devField, setDevField] = useState("")

    function handleDevName(e){
        setDevName(e.target.value)
    }

    function handleDevImage(e){
        setDevImage(e.target.value)
    }

    function handleDevField(e){
        setDevField(e.target.value)
    }

    function handleCreateProfile(e){
        e.preventDefault()

        const userProfile = {
            name: devName ,
            field: devField,
            image: devImage,
        }

        console.log("test2")
        
        fetch("http://localhost:3000/devs",{
            method:"POST",
            headers:{
                "Content-Type" : "application/json"
            },
            body: JSON.stringify(userProfile)
        })

        e.preventDefault()
        console.log("test")  
        history.push("/HomePage")

        console.log(userProfile)
    }


    return(
        <div>
            <h1> Welcome To Only Devs Profile</h1>
                <div className="container">
                    <form onSubmit={handleCreateProfile} >
                        <h2>Pair Programming Is Only One Click Away</h2>
                        <h3>Create Your Profile</h3>
                        <input
                        onChange={handleDevName}
                        value={devName}
                        type="text"
                        name="name"
                        placeholder="Enter Your Dev Name..."
                        className="input-text"
                        />
                            <br />
                        <input
                        onChange={handleDevImage}
                        value={devImage}
                        type="text"
                        name="image"
                        placeholder="Enter Your Profile Image"
                        className="input-text"
                        />
                            <br />
                         <select value = {devField} onChange={handleDevField}>
                            <option value = "Software Engineer" name = "Software Engineer">Software Engineer</option>
                            <option value = "Product Designer" name = "Product Designer"> Product Designer </option>
                            <option value = "Data Analyst" name = "Data Analyst"> Data Analyst </option>
                            <option value = "Cyber Security" name = "Cyber Security"> Cyber Security </option>
                            <option value = "UX/UI" name = "UX/UI"> UX/UI </option>
                        </select>
                            <br />
                        <button
                        type="submit"
                        name="submit"
                        > Create Your Dev Provile </button> 
                    </form>
                </div>
        </div>
    )
}

export default CreateProfile