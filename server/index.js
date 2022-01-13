// server/index.js

const express = require('express')
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //gives us access to req.body

//ROUTES//

//get all dishes
app.get("/dishes", async (req, res) => {
    try {
        const allDishes = await pool.query(`SELECT * FROM dishes`);
        res.json(allDishes.rows);
    } catch (err) {
        console.error(err.message)
    }
});

app.get("/dishes/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const length = req.params.id.length;
        console.log(id[0]);
        if (length == 12) {
            // if (id[0] === "0") {
            //     console.log(id[0] + " == true");
            // } else {
            //     console.log(id[0] + " == false");
            // }
            let query = make_query(id);
            //console.log(query);
            const allDishes = await pool.query(query);
            res.json(allDishes.rows);
        } else {
            console.error("ERROR: length = " + length + ", should be 12");
        }
        
        // let downhill = parseInt(id[0]);
        // const allDishes = await pool.query(`SELECT * FROM dishes WHERE meal_time = 'Breakfast'`);
        // res.json(allDishes.rows);
    } catch (err) {
        console.error(err.message)
    }
});

//note, only chooses lunch times rn
function make_query(id) {
    let query = `SELECT * FROM dishes WHERE meal_time = 'Breakfast'`;
    if (id[0] === "1") query += ` AND dining_hall IN ('Dewick', 'Commons', 'Hodg', 'Pax', 'Kindlevan')`; //Downhill
    if (id[1] === "1") query += ` AND dining_hall IN ('Carm', 'Mugar', 'Tower Cafe')`; //Uphill 
    if (id[2] === "1" && id[3] !== "1") query += ` AND dining_hall IN ('Carm', 'Dewick', 'Kindlevan')`; //Mealplan, no JumboCash (TODO: needs testing!)
    //if (id[3] === "1") ; //JumboCash
    if (id[4] === "1") ; //Favorites - TODO: Implement this
    if (id[5] === "1") ' AND rare = true'; //Rare finds - TODO: need to revisit this
    if (id[6] === "1") query += ' AND vegetarian = true'; //Vegetarian
    if (id[7] === "1") query += ' AND vegan = true'; //Vegan
    if (id[8] === "1") query += ' AND gluten_free = true'; //Gluten free
    if (id[9] === "1") query += ' AND milk_free = true'; //Milk free
    if (id[10] === "1") query += ' AND nut_free = true'; //Nut free
    if (id[11] === "1") query += ' AND allergen_free = true'; //Allergen free
    return query;
}



app.listen(5000, () => {
    console.log("server has started on port 5000");
});