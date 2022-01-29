import React, { Fragment, useEffect, useState } from "react";
import {
  //RecoilRoot,
  //atom,
  //selector,
  //useRecoilState,
  useRecoilValue,
} from 'recoil'
import { customizationState, getBitpackedCustomizationState, 
         getTimePeriod } from "../state.js";

import "./Menu.css";

const DiningHallItems = (props) => {
    const dishes = props.dishes;
    const meal_time = useRecoilValue(getTimePeriod);
    
    //console.log(dishes);
    
    //checks if there exists dishes to display for the given dining hall
    if (dishes.filter(dish => dish.dining_hall === props.diningHall 
                      && dish.meal_time === meal_time).length === 0)
                          return <div />;

    return (
        <div className="DiningHall">
            <h3>{props.diningHall}</h3>
            {dishes.filter(dish => dish.dining_hall === props.diningHall && dish.meal_time === meal_time).map(hallDishes => (
                <p key={hallDishes.id} className="dish">{hallDishes.name}</p>
            ))}
        </div>
    );
}

const Menu = () => {
    
    const [ dishes, setDishes ] = useState([]);
    const id = useRecoilValue(getBitpackedCustomizationState);
    
    const getDishes = async () => {
        try {
            const response = await fetch("http://localhost:5000/dishes/" + id);
            const jsonData = await response.json();
            setDishes(jsonData);
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
                <DiningHallItems diningHall="Carm" dishes={dishes} />
                <DiningHallItems diningHall="Dewick" dishes={dishes} />
                <DiningHallItems diningHall="Commons" dishes={dishes} />
                <DiningHallItems diningHall="Kindlevan" dishes={dishes} />
                <DiningHallItems diningHall="Hodg" dishes={dishes} />
                <DiningHallItems diningHall="Mugar" dishes={dishes} />
                <DiningHallItems diningHall="Pax" dishes={dishes} />
                <hr />
                <p className="SearchWarning">if you don't see many menu items, consider changing your search parameters :)</p>
                <p className="Credits">created by Lucas Maley</p>
            </div>
        </Fragment>
    )
}

export default Menu;