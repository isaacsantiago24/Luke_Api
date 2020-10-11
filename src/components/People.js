import React, {useState, useEffect} from 'react';
import axios from 'axios'; //allows us to make api calls
import {navigate} from "@reach/router";

function People({id}){ //destructuring id 
    const[people, setPeople]=useState(null); // at page loading we have nothing there

    useEffect(() =>{
        axios
            .get('https://swapi.dev/api/people/' + id +"/")
            .then(response => {
                setPeople(response.data);
            })
            .catch(() => navigate("/error"));
    }, [id]); //id tells it when to refresh, when the id changes it will reload


    if(people == null){
        return "Loading....";
    }

    return(
        <div>
            <h1>{people.name}</h1> 
            <p>Height: {people.height}</p>
            <p>Hair Color: {people.hair_color}</p>
            <p>Eye Color: {people.eye_color}</p>
            <p>Skin Color: {people.skin_color}</p>
        </div>
    )
 
}


export default People;