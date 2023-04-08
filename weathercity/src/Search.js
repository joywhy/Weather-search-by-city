import React, { useState } from "react";


function Search({onSearch}){
const [textcity,setcity]=useState(""); //이벤트 핸들러 내에서 비동기적으로 동작

function handlecity(e){
setcity(e.target.value);
//console.log(textcity); //갱신이전에 값이 출력된다. 
// 하나의 이벤트 핸들러 내에서 setState가 여러번 호출된다면, 이벤트가 끝날 시점에 state를 일괄적으로 업데이트하고 렌더링
//왜 ㅅ  를 누르면 ㅅ이 출력이 안되고 빈문자열이 나오고 
//서 를 누르면 그제서야 ㅅ이 출력될까 
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
