async function apiCall(url) {

try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
} catch (error) {
    console.log(error);
}
    //add api call logic here
}

let arr = [];
function appendArticles(articles, main) {
    //add append logic here
    articles.forEach(element => {
        
        let a = document.createElement("div");

        let b = document.createElement("img");
        b.src = element.urlToImage;

        let c = document.createElement("p");
        c.innerHTML=element.source.name;

        let d = document.createElement("p");
        d.innerHTML = element.content;

        a.onclick =()=>{
            arr = [];
            arr.push(element);
            localStorage.setItem("click",JSON.stringify(arr));
            window.location.href = "news.html";
        }

        a.append(b,c,d);
        main.append(a);
    });

}

export { apiCall, appendArticles }