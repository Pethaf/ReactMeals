import { useGlobalContext } from "../Context";
const Meals = () => {
    const {meals} = useGlobalContext(); 
    return (
        <section>
        {meals.map(meal => { console.log(meal); return <h4 key={meal.idMeal}>{meal.strMeal}</h4>})}
        </section>
    )
}

export default Meals;