import fetch from "node-fetch";

export function getWeather(city=""){
console.log(city);

const API_KEY = process.env.REACT_APP_API_KEY;
//const url = `...returnType=json&ServiceKey=${API_KEY}&ver=1.3`;
//const url = `https://api.openweathermap.org/data/2.5/weather?q=seoul&appid=${API_KEY}`;

const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`;
// return fetch(url)//fetch(url)만하면 어떤 형택?
// .then(resp=>resp.json());
//f835ba4e084f2a784f9063ce635d0818
return fetch(url)
.then(resp=>resp.json())
.then(resp=>{
   console.log(resp.weather[0].main);
   console.log(Math.floor(resp.main.temp-273));
 console.log(resp.main.temp);

 return resp;
});
};