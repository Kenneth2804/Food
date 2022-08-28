import React, {Component} from "react";
import './estilos/Start.css';
import { Link } from "react-router-dom";


export default class Start extends Component {

    render(){

return (
    
<div className="container">

                    <Link to='/home'>
           <button className="b1">START</button>
                    </Link>
                    </div>



)

    } 
}