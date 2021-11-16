ALBUM
const API = "https://rickandmortyapi.com/api/character";

const getData = (api) => {
return fetch(api)
    .then((response) => response.json())
    .then((json) => {
    fillData(json);
    })
    .catch((error) => {
    console.log("Error", error);
    });
};


const fillData = (data) => {
let html = "";
let limit = 20;
    html += '<div class="col">';
    html += '<div class="card h-100">';
    html += `<img src="${data[i].url}" class="card-img-top" alt="${data[i].name}">`
    html += '<div class="card-body">';
    html += `<h5 class="card-title"> ${data.name} </h5>'}`;

    html += "</div>";
    html += "</div>";
    html += "</div>";
};

document.getElementById("dataAlbum").innerHTML = html;

getData(API);
