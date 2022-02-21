import { apiCall, appendArticles} from "./main.js"
let term = localStorage.getItem("serch");
// console.log(term);

async function storeSearchterm(term) {
    let url = `https://shrouded-earth-23381.herokuapp.com/api/search/?q=${term}`;
    let f = await apiCall(url);
    let g = document.getElementById("main");
    appendArticles(f,g);
}
storeSearchterm(term);
export default storeSearchterm;
