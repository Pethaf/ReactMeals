import React, {useContext, useEffect, useState} from "react";
import axios from "axios";
const allMealsURL = "https://themealdb.com/api/json/v1/1/search.php?f=a";
const randomMealUrl = "https://themealdb.com/api/json/v1/1/random.php";
const AppContext = React.createContext()

const AppProvider = ({ children}) => {
    useEffect(()=> {
        const fetchMeals = async (url) =>{
           
        try {
            const data = await axios.get(url);
            setMeals(data.data.meals);
            console.log(`Meals: ${meals}`);
        }
        catch(error){
            console.log(error.response);
        }
    }
    fetchMeals(allMealsURL);
    },[])
    const [meals, setMeals] = useState([]);
    return ( 
        <AppContext.Provider value = {{meals}}>
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(AppContext);
}
export {AppContext, AppProvider}