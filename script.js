// URL 
let urlString = "https://jsonplaceholder.typicode.com/users";

// variabile dove salverò i dati:
let dataUsers; 

// nodi utili:
// bottone
const btnSearch = document.getElementById("btnSearch");

// fetch di dati:
window.onload = async () => {
    try {
        const response = await fetch(urlString);
        dataUsers = await response.json(); 
        console.log(dataUsers)       
        printUsers(dataUsers);
        btnSearch.onclick = searchResult;
    } catch (error) {
        console.log("No data loaded!")
    }
}

// funzione dati in tabella:
function printUsers(array) {
    let tableBody = document.querySelector("tbody"); //body della tabella

    array.map((el) => {      

        let tableLine = document.createElement("tr"); 
        let tableId = document.createElement("th");
        tableId.setAttribute("scope", "row");
        let idLink = document.createElement("a");
        idLink.classList.add("link-style");
        idLink.href = `detail.html?id=${el.id}`;
        idLink.innerText = `${el.id}`;

        let tableName = document.createElement("td");
        tableName.innerText = `${el.name}`;

        let tableUserName = document.createElement("td");
        tableUserName.innerText = `${el.username}`;

        let tableEmail = document.createElement("td");
        tableEmail.innerText = `${el.email}`;

        tableBody.appendChild(tableLine);

        tableLine.appendChild(tableId);
        tableId.appendChild(idLink);
        tableLine.appendChild(tableName);
        tableLine.appendChild(tableUserName)
        tableLine.appendChild(tableEmail);
        
    });      
}

function searchResult(array) {
    let selection = document.getElementById("usersFilter").value;
    selection = selection.toLowerCase();

    let inputValue = document.getElementById("inputField").value;

    let table = document.querySelector("tbody"); // body della tabella per mostrare i risultati filtrati

    if (selection && inputValue) { // CONTROLLO CHECK ENTRAMBI GLI INPUT!
        switch (selection) {
            case "1":
                let nameFind = dataUsers.filter((el) => el.name.toLowerCase().includes(inputValue)); 
                table.innerHTML = "";
                printUsers(nameFind);
                break;
            case "2":
                let usernameFind = dataUsers.filter((el) => el.username.toLowerCase().includes(inputValue)); 
                table.innerHTML = "";
                printUsers(usernameFind);
                break;
            case "3":
                let emailFind = dataUsers.filter((el) => el.email.toLowerCase().includes(inputValue)); 
                table.innerHTML = "";
                printUsers(emailFind);
                break;
        }          
    }
}
    