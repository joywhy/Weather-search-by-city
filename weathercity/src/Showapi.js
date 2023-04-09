import React from "react";

import "./Showapi.css";

function Showapi({list =[]}){
// console.log(list.weather[0].main);
// console.log(list.weather);
// console.log(list.main.temp);

if(list.length===0){
    return <div> 온도를 받아올 수 없습니다.</div>
}else{
    return(
        <div className="showapi">
           <h1>검색한 도시의 날씨정보</h1>
           <div>도시:{list.name}</div>
           <div>온도:{Math.floor(list.main.temp-273)}</div>
           <div>날씨:{list.weather[0].main}</div>
        </div>
    );
}


}
export default Showapi;
