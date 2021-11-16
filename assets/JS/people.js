const API = "https://rickandmortyapi.com/api/character";
const btnSearch = document.getElementById("btnSearch");

const getData = (api) => {
return fetch(api)
    .then((response) => response.json())
    .then((json) => {
    console.log(json);
    fillData(json);
    })
    .catch((error) => {
    console.log("Error in the Api", error);
    });
};

const fillData = (json) => {
let html = "";
json.forEach((pp) => {
    html += '<div class="col">';
    html += '<div class="card h-100">';
    html += '<div class="card-body">';
    html += `<h5 class="card-title"> ${pp.name} </h5>`;
    html += `<p class="card-text"> ${pp.species} </p>`;
    html += '<div class="card-footer">';
    html += `<p class="card-text">Episodes: ${pp.gender}</p>`;
    html += `<small class="text-muted"> ${pp.suite}</small>`;

    html += "</div>";
    html += "</div>";
    html += "</div>";
    html += "</div>";
});
document.getElementById("dataPeople").innerHTML = html;
};

btnSearch.onclick = function () {
getData(API);
};
