import {Favorites} from "./components/Favorites";
import { Meals } from "./components/Meals";
import { Modal } from "./components/Modal";
import { Search } from "./components/Search";
import './App.css';

function App() {
  return (
    <div> 
    <Favorites />
    <Meals /> 
    <Modal /> 
    <Search />  
    <h1>React Meals</h1>
    </div>
  ); 
}

export default App;
