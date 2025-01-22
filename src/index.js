import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];
function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}

function Menu() {
  <div>
    <h2>Our Menu</h2>;
    <Pizza name='' ingredients='' photoName='' price={10}/>
  </div>;
}
function Footer() {
  const hour = new Date().getHours();
  const openhour = 12;
  const closehour = 22;
  const isOpen = hour >= openhour && hour <= closehour;
  // if (hour >= openhour && hour <= closehour) alert("We're currently open");
  // alert("Sorry we're closeed");
  return (
    <footer>{new Date().toLocaleTimeString()}. We'r currently open</footer>
  );
}

function Pizza(props) {
  return( <div className="pizza">
    <image src={props.photoName} alt={props.name}>
    <h3>{props.name}</h3>
    <p>{props.ingredients}</p>
    <span>{props.price}</span>
    </div>);
}

const container = document.getElementById("root");

const root = createRoot(container);

root.render(<App />);
