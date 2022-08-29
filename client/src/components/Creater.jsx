
import React, {useState, useHistory} from "react";
import {Link, } from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from "react";
import {getDiet, postDiets } from '../redux/actions/index';
import './estilos/Creater.css';

export default function Creater (){
    const dispatch = useDispatch();
    const miburritosabanero = useSelector((state) => state.diets);
    console.log(miburritosabanero)
    useEffect(() => {
      dispatch(getDiet());
    }, [dispatch]);
  
    const [input, setInput] = useState({
      title: "",
      summary: "",
      healthScore: "",
      steps: "",
      image: "",
      diets: [],
    });
    const [error, setError] = useState({});
  
    let handleChange = (e) => {
      e.preventDefault();
      setInput( { ...input, [e.target.name]: e.target.value });
      setError(
        validate({
          ...input,
          [e.target.name]: e.target.value,
        })
      );
    };
  
  
      const handleSelect = (e) => {
        e.preventDefault();
        setInput({
            ...input,
            diets: [...input.diets, e.target.value] 
        });
 
        setError(
          validate({
            ...input,
            diets: [...input.diets, e.target.value],
          })
        );   }


 
    let handleSteps = (e) => {
      e.preventDefault();
      setInput({
        ...input,
        [e.target.name]: e.target.value
      });
      setError(
        validate({
          ...input,
      [e.target.name]: e.target.value
        })
      );
      console.log(input.steps);
    };
  
    let handleSubmit = (e) => {
      e.preventDefault();
     dispatch(postDiets(input));
      console.log(input);
      alert("recipe created ☻");
      setInput({
        title: "",
        summary: "",
        healthScore: "",
        steps: "",
        image: "",
        diets: [],
      });
    };
    function handleDelete(e){
      let { value } = e.target;
      console.log("a");
      if(value && input.diets.includes(value)){
          let filtered = input.diets.filter(e => e !== value);
          setInput({
              ...input,
              //Cada vez que haces un click en el select, se va concatenando en diet
              //diet: [...input.diet, e.target.value],
              diets : filtered,
          });
      }
  }
  
    let validate = (input) => {
      let error = {};
      if (!input.title || input.title.length > 40) {
        error.title = "Write a name";
      } else if (!input.healthScore || input.healthScore < 0 ||  input.healthScore > 100 ) {error.healthScore = "The Health Score must be from 0 to a 100";
      } else if (!input.steps[0]) { error.steps = "You need to write steps";
      } else if (!input.image) { error.image = "Upload an image";
      } else if (!input.diets.length) { error.diets = "Choose a Diet";
      }else { error.submit = "Time to submit ☻";}
      console.log(error)
      return error;
    };


  
    return (
      <div>
  
  
        <div>
          <h1 >Create Recipe</h1>
        </div>
        <div >
          <br />
          <form onSubmit={(e) => handleSubmit(e)}>
            <div>
              <label>Name:</label>
              <input type={"text"} name={"title"} value={input.title}
                onChange={(e) => handleChange(e)}
              />
            </div>
            {error.title && <p >{error.title}</p>}
            <div>
              <label>Resume:</label>
              <input type={"text"} name={"summary"} value={input.summary}  onChange={(e) => handleChange(e)}/>
            </div>

            <div >
              <label>Healthy Level:</label>
              <input type={"number"} name={"healthScore"} value={input.healthScore}  onChange={(e) => handleChange(e)}/>
            </div>
            {error.healthScore && (  <p>{error.healthScore}</p>)}
  
            <div>
              <label>Steps:</label>
              <input type={"text"} name={"steps"}  value={input.steps} onChange={(e) => handleSteps(e)}/>
            </div>
            {error.steps && (<p>{error.steps}</p>)}
          
            <div>
              <label>Image:</label>
              <input type={"text"} name={"image"} value={input.image}   onChange={(e) => handleChange(e)}/>
            </div>
            {error.image && <p>{error.image}</p>}
  
            <div>
              <h4>Select a Diet or Diets</h4>
            </div>
            <div>
            <label>Diets: </label>
                    <select className="sele"   onChange={handleSelect} >
                    {
                       miburritosabanero.map(el => (
                            <option key={el.id} value={el}>{el}</option>
                        ))
                    }

                    </select>
                    
                    <ul><li>{input.diets.map(el => el + " ,")}</li></ul>
                    {error.diets  && <span>{error.diets}</span>}
                </div>

                <div>
                    {
                        input.diets.map( (el, i) => (
                            <div  key ={i}>
                                <label>{el}</label>
                                <button type="button" value={el}  onClick={(e) => handleDelete(e, el)}>X</button>
                            </div>
                        ))
                        }</div>
  
            <br />
            
            <input type={"submit"} value={"CREATE"}/>
          </form>
        </div>
      </div>
    );
                    }