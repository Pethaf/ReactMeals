import React, {useContext, useEffect} from "react";
import axios from "axios";
const allMealsURL = "https://themealdb.com/api/json/v1/1/search.php?f=a";
const randomMealUrl = "https://themealdb.com/api/json/v1/1/random.php";
const AppContext = React.createContext()

const AppProvider = ({ children}) => {
    useEffect(()=> {
        const fetchData = (url) =>{
            axios.get(url).then( resp => console.log(resp));
        }
        fetchData(randomMealUrl);
        fetchData(allMealsURL);
    },[])
    return ( 
        <AppContext.Provider value={{name:"john",role:"student"}}> 
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () =>{
    return useContext(AppContext);
}
export {AppContext, AppProvider}