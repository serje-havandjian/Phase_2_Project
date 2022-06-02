import React, {useState, useEffect} from "react"
import NavBar from "./NavBar"
import DevCard from "./DevCard"


function HomePage(){

    const [devsList, setDevsList ] = useState([])
    const [filtered, setFiltered] = useState([])

    function handleSetting(response){
        setDevsList(response)
        setFiltered(response)
    }

    console.log(filtered)
    console.log(devsList)

    function handleFilter(e) {
        
        const filteredList = devsList.filter((dev) => {
            if(dev.field === e.target.value) {
                return true
            } else {
                return false
            }
        })
        setFiltered(filteredList)

    }

    const renderDevs = filtered.map((dev)=>{
        function handleClick(){
        }
        return <DevCard key={dev.id} name={dev.name} field={dev.field} image={dev.image} like={dev.like} handleClick={handleClick} />
    })

    useEffect(()=>{
        fetch("https://onlyd3vs-backend.herokuapp.com/devs")
        .then(response => response.json())
        .then(response => handleSetting(response))
    }, [])

  
    return(
        <div className="home">
            <NavBar />
            <div className="logo">
                <h1>_onlyDevs</h1>
                <h5>Think Farmers Only... <br/>Only Less Shitty</h5>
            </div>
            <select className="filter" onChange={handleFilter}>
                <option value="" disable selected>Filter By Field...</option>
                <option value = "Software Engineer" name = "Software Engineer">Software Engineer</option>
                <option value = "Product Designer" name = "Product Designer"> Product Designer </option>
                <option value = "Data Analyst" name = "Data Analyst"> Data Analyst </option>
                <option value = "Cyber Security" name = "Cyber Security"> Cyber Security </option>
                <option value = "UX/UI" name = "UX/UI"> UX/UI </option>
            </select>
            <div className="cardlist">{renderDevs}</div>
        </div>
        
    )
}

export default HomePage