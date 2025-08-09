import axios from "axios";
import { useState, useEffect } from "react";

const Meals = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        axios
            .get("https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood")
            .then((res) => {
                console.log(res.data.meals);
                setItems(res.data.meals);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    const itemsList = items.map(({ strMeal, strMealThumb, idMeal }) => {
        return (
            <section key={idMeal}>
                <img src={strMealThumb} alt={strMeal} />
                <section>
                    <h6>{strMeal}</h6>
                    <p>{idMeal}</p>
                </section>
            </section>
        );
    });
    return itemsList;
};

export default Meals;
