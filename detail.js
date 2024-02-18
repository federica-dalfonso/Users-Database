// URL detail
let urlUser = "https://jsonplaceholder.typicode.com/users/";

// params
let activeParams = window.location.search; 
// console.log(activeParams);
let params = new URLSearchParams(activeParams);
let userId = params.get("id");

let detail;

fetch(`${urlUser}${userId}`)
.then((response) => response.json())
.then((json) => {
    detail = json;
    console.log(detail)
    getDetails(detail);
})
.catch((err)  => console.log("Error detected: ", err));

function getDetails (detail) {
    let {name, username, email, phone, website} = detail;
    let detArray = [name, username, email, phone, website];
    let paragraphs = document.querySelectorAll("div p");
    
    if (detArray.length !== paragraphs) { // ciclo sincronizzato
        for (let i = 0; i < detArray.length; i++) {
            let p = paragraphs[i];
            let det = detArray[i];

            p.innerText = det;
        }
    }    
    
}