import React, {useState, useEffect} from "react"
import NavBar from "./NavBar"
import DevCard from "./DevCard"


function HomePage(){

    const [devsList, setDevsList ] = useState([])
    const [filterSelection, setFilterSelection] = useState("")


    function handleFilter(e) {
        // setFilterSelection(e.target.value)
        const filteredList = devsList.filter((dev) => {
            if(dev.field === e.target.value) {
                return true
            } else {
                return false
            }
        })
        // setFilterSelection(filteredList)
        setDevsList(filteredList)
    }

    console.log(filterSelection)




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
        <div className="home">
            <NavBar />
            <h1 className="logo">_onlyDevs</h1>
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