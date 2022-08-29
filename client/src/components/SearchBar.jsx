import React from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import {getFoodName} from "../redux/actions/index";
import './estilos/SearchBar.css';

export default function SearchBar ({setcurrentPage}){
    const dispatch= useDispatch()
    const [name, setName] = useState("")

    function handleInputChange(e) {
        setName(e.target.value)
    }

    function handleSubmit(e){
        if(name.length !== 0 ){
            dispatch(getFoodName(name))
            setcurrentPage(1) 
        }
        if(name.length === 0){
            alert('You Should Write...')
        }
        setName("")
    }

    return (
        <div >
            <input
            type = "text" value= {name} className= "bus" placeholder="Search recipe..."
            onChange={(e) => handleInputChange(e)}
            />
            <button className="boton" type="submit"  onClick={(e) => handleSubmit(e)}>
           SEARCH
            </button>
        </div>
    )

}