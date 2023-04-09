import fetch from "node-fetch";

export function getWeather(city=""){
console.log(city);

const API_KEY = process.env.REACT_APP_API_KEY;


const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;

return fetch(url)  
.then(resp=>resp.json())// 처음부터 끝까지 문자열을-> 제이슨으로 바꾼다. [{ㅇㅇ;{},ㅇㅇㅇ: {} ,   }]
.then(resp=>{
//    console.log(resp.weather[0].main);
//    console.log(Math.floor(resp.main.temp-273));
//  console.log(resp.main.temp);

 return resp;// 리턴값이  프로미스 라서 then 사용
});
};