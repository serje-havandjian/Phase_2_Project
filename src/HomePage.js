import React, {useState, useEffect} from "react"
import NavBar from "./NavBar"
import DevCard from "./DevCard"


function HomePage(){

    const [devsList, setDevsList ] = useState([])

    console.log(devsList)

    const renderDevs = devsList.map((dev)=>{
        function handleClick(){
            console.log("test")
        }
        return <DevCard key={dev.id} name={dev.name} field={dev.field} image={dev.image} like={dev.like} handleClick={handleClick} />
    })

    useEffect(()=>{
        fetch("http://localhost:3000/devs")
        .then(response => response.json())
        .then(response => setDevsList(response))
    }, [])

    return(
        <div>
            <NavBar />
            "Home"
            {renderDevs}
        </div>
        
    )
}

export default HomePage