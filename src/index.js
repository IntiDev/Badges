import React from "react";
import ReactDOM from "react-dom";

const jsx = <h1>Hello, Platzi Badges :D!</h1>;
// const element = React.createElement(
//   'a',
//   {href: 'https://platzi.com'},
//   'Ir a platzi'
//   );
const name = "Inti ;)";
const element = React.createElement("h1", {}, `Hola soy ${name}`);
const sum = () => 3+3;
//{__expresiones__} que se puedan EVALUAR -> Los valores falsos NO se muestran
const elementJSX = <h1> Hola soy {name}</h1> // variable / expresión {2 + 2 } / llamada a función {sum()}
const container = document.getElementById("app");

const contenedorJSX = (
  <div>
    <h1> Hola :D</h1>
    <p> Algo de texto para mostrar xP</p>
  </div>
);

// ReactDOM.render(__qué__, __dónde__);
// ReactDOM.render(element, container);
// ReactDOM.render(elementJSX, container);
ReactDOM.render(contenedorJSX, container);
