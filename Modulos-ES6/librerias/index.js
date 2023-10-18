//Instalar Axios para hacer llamadas a servicios externos, manejo de protocolo HTTP 
//con javascript
import axios from "axios";

// cargaremos una api de pokemon
axios.get('https://pokeapi.co/api/v2/pokemon/ditto')
    .then(function (response) {
        // handle success
        console.log("Success!!!");
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log("Error!!");
        console.log(error);
    });

    /**
     * LIBRERIAS INTERESANTES DE JAVASCRIPT
     * Dojo toolkit
     * jQuery
     * Vue js
     * React js
     * Velocity js
     * WinJS
     * Google polymer
     * D3 js
     * Pixi JS
     * SWFObject
     * Three js
     * socket io
     * Math jax
     * Verge3D
     * Anime js
     * Parsley
     * QUnit
     */