import React from "react";
import { Link, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFoodDetail, re } from "../redux/actions/index";
import './estilos/details.css'

export default function Details(props) {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getFoodDetail(props.match.params.id));
    dispatch(re([]))
  }, [dispatch]);

  const myfoods = useSelector((state) => state.detail);

  
  return (
    <div>
     
     <Link to="/home">
        <button>Volver</button>
      </Link>
      <div  className="card">
      {myfoods.length > 0 ? (
        <div><br></br>
          <img
          className="imagenn"
            src={myfoods[0].image}
            alt="img not found"
            width="200px"
            height="250px"
          />
          <h1 className="elneim">NAME: <br></br>{myfoods[0].title}</h1>
          <h2>SUMMARY: <br></br></h2> <p className="nombress">{myfoods[0].summary.replace(/<[^>]*>?/g)}</p>
          <h2>DIET TYPE:<br></br></h2> <p className="nombress">{myfoods[0].diets}</p> 
          <h2>HealthScore:<br></br></h2> <p className="nombress"> {myfoods[0].healthScore}</p>
          <h2>steps:<br></br></h2> <p className="nombress"> {myfoods[0].steps || "not found"}</p>
        </div>
      ) : (       <img src="https://taajpalacenm.com/public/loader.gif"/>
        )}
</div>
      <Link to="/home">
        <button>Volver</button>
      </Link>
    </div>
  );
}
