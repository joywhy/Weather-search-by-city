import React, { useState } from "react";


function Search({onSearch}){
const [textcity,setcity]=useState("");

function handlecity(e){
setcity(e.target.value);
}
function handleSearchBtn(){
    const city = textcity===""?null:textcity;

    onSearch(city);

    // if(city!==""){  //그냥 city 문자열 안넣고 state 로 바로 넣으면 안되나?
    //     onSearch(city);
    // }


}
return(
    <div>
        <input type ="text" value={textcity} onChange ={handlecity}></input>
       <button onClick={handleSearchBtn}>버튼</button> 
    </div>
);

}
export default Search;
