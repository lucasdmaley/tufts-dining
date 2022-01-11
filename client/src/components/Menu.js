import React, { Fragment, useEffect, useState } from "react";
import "./Menu.css";

const Menu = () => {
    
    const [ dishes, setDishes ] = useState([]);
    
    const getDishes = async () => {
        try {
            const response = await fetch("http://localhost:5000/dishes");
            const jsonData = await response.json();
            
            setDishes(jsonData);
            filterDishes();
        } catch (err) {
            console.error(err.message);
        }
    }
    
    const filterDishes = async () => {
        try {
            //check state to see if filter options are used, filter
        } catch (err) {
            console.error(err.message);
        }
    }
    
    useEffect(() => { //every time component loads
        getDishes();
    }, []);
    
    return (
        <Fragment>
            <div className="Menu">
                <div className="Dewick DiningHall">
                    <h3>Dewick</h3>
                    {dishes.filter(dish => dish.dining_hall === "Dewick").map(dewickDishes => (
                        <p key={dewickDishes.id} className="dish">{dewickDishes.name}</p>
                    ))}
                </div>
                <div className="Carm DiningHall">
                    <h3>Carm</h3>
                    {dishes.filter(dish => dish.dining_hall === "Carm").map(carmDishes => (
                        <p key={carmDishes.id} className="dish">{carmDishes.name}</p>
                    ))}
                </div>
                <div className="Kindlevan DiningHall">
                    <h3>Kindlevan</h3>
                    {dishes.filter(dish => dish.dining_hall === "Kindlevan").map(kindlevanDishes => (
                        <p key={kindlevanDishes.id} className="dish">{kindlevanDishes.name}</p>
                    ))}
                </div>
            </div>
        </Fragment>
    )
}

export default Menu;