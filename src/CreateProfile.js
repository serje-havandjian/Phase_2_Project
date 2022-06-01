import React, { useState } from "react"
import {useHistory} from "react-router-dom"
import MyProfile from "./MyProfile"

function CreateProfile({setCurrentUser}){
    const history = useHistory()

    const [devName, setDevName] = useState("")
    const [devImage, setDevImage] = useState("")
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
        .then(res => res.json())
        .then(user => setCurrentUser(user))

        e.preventDefault()  
        history.push("/HomePage")

        // function passNewUser(name, image, field) {
        //     const name = devName
        //     const field = devField
        //     const image = devImage
        // }
        // <MyProfile passNewUser={passNewUser} />
    }


    return(
        <div className="login">
            <h1 className="logo">_onlyDevs</h1>
            <div className="createProfileHeader">
                <h1> Welcome To onlyDevs!</h1>
                <h2>Pair Programming is Only a Click Away</h2>
            </div>
            <div className="createProfileForm">
                <h3>Create Your Profile</h3>
                <form onSubmit={handleCreateProfile} >
                    <label>Name: </label>
                    <input
                    onChange={handleDevName}
                    value={devName}
                    type="text"
                    name="name"
                    placeholder="Enter Your Dev Name..."
                    className="input-text"
                    />
                    <br />
                    <label>Avatar: </label>
                    <input
                    onChange={handleDevImage}
                    value={devImage}
                    type="text"
                    name="image"
                    placeholder="Enter Your Profile Image..."
                    className="input-text"
                    />
                    <br />
                    <label>Field: </label>
                        <select value = {devField} onChange={handleDevField}>
                        <option value="" disable selected>Select Your Field...</option>
                        <option value = "Software Engineer" name = "Software Engineer">Software Engineer</option>
                        <option value = "Product Designer" name = "Product Designer"> Product Designer </option>
                        <option value = "Data Analyst" name = "Data Analyst"> Data Analyst </option>
                        <option value = "Cyber Security" name = "Cyber Security"> Cyber Security </option>
                        <option value = "UX/UI" name = "UX/UI"> UX/UI </option>
                    </select>
                            <br />
                    <button
                    className="createProfileButton"
                    type="submit"
                    name="submit"
                    > Create Your Dev Provile </button> 
                </form>
            </div>
        </div>
    )
}

export default CreateProfile