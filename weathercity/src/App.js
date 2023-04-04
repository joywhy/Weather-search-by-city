import React, { useEffect,useState } from "react";
import './App.css';
import{getWeather} from "./weatherapi";
import Search from "./Search";
import Showapi from "./Showapi";

function App() {
const [condition,setcondition]=useState("");

function search(city){
 
  if(condition!==city){
     setcondition(city);
    
   }
   console.log(condition);  //왜 처음 클릭 햇을때 빈문자 그다음 서울이 나올까 
}
useEffect(()=>{
  console.log("작동"); //처음에 왜 작동이 두번이 뜨나
  getWeather(condition);

},[condition]);

  return (
    <div className="App">
      <Search onSearch={search}/>
      <Showapi/>
    </div>
  );
}

export default App;
