import React, {useState, useEffect} from 'react';
import axios from 'axios'; //allows us to make api calls
import {navigate} from "@reach/router";


function Planets({id}){ //destructuring id 
    const[planets, setPlanets]=useState(null); // at page loading we have nothing there

    useEffect(() =>{
        axios
            .get('https://swapi.dev/api/planets/' + id +"/")
            .then(response => {
                setPlanets(response.data);
            })
            .catch(()=> navigate("/error"));
    }, [id]); //id tells it when to refresh, when the id changes it will reload


    if(planets == null){
        return "Loading....";
    }

    return(
        <div>
            <h1>{planets.name}</h1> 
            <p>Climate: {planets.climate}</p>
            <p>Terrain: {planets.terrain}</p>
            <p>Surface Water: {planets.surface_water}</p>
            <p>Population: {planets.population}</p>
        </div>
    )
 
}


export default Planets;