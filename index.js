import sidebar from "../components/sidebar.js";
import { apiCall, appendArticles } from "./main.js"
document.getElementById("sidebar").innerHTML= sidebar();

let url = "https://shrouded-earth-23381.herokuapp.com/api/headlines/india";
let result = await apiCall(url);
console.log(result);
let main = document.getElementById("main");
appendArticles(result,main);

let input = document.getElementById("searchbar");
input.addEventListener("keypress",(e)=>{
if(e.key=="Enter"){
    let v = document.getElementById("searchbar").value;
    localStorage.setItem("serch",v);
    window.location.href="search.html";
}
});