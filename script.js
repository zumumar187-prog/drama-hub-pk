const API_URL =
"https://script.google.com/macros/s/AKfycbyPkk2psZGdwAsqDsQdMvKCtIvYeQpHDqb51ffFiJ3BPEaOCe5AcoY07zZ59gCXTOGe-g/exec";

const pakistaniContainer = document.getElementById("pakistaniContainer");
const turkishContainer = document.getElementById("turkishContainer");
const indianContainer = document.getElementById("indianContainer");

function createCard(drama){

return `
<div class="card">

<img src="${drama.thumbnail}" alt="${drama.title}">

<h3>${drama.title}</h3>

<p>${drama.category}</p>

<button onclick="window.location.href='episode.html?id=${drama.id}'">
Watch Episodes
</button>

</div>
`;

}

fetch(API_URL)
.then(res => res.json())
.then(data => {

const dramas = data.dramas || data;

dramas.forEach(drama => {

  
if(drama.category === "Pakistani"){
pakistaniContainer.innerHTML += createCard(drama);
}

if(drama.category === "Turkish"){
turkishContainer.innerHTML += createCard(drama);
}

if(drama.category === "Indian"){
indianContainer.innerHTML += createCard(drama);
}

});

})
.catch(error => {
console.log(error);
});
const latestPoster = document.getElementById("latestPoster");

fetch(API_URL)
.then(res => res.json())
.then(data => {

const dramas = data.dramas || data;

if(dramas.length > 0 && latestPoster){

latestPoster.src = dramas[0].thumbnail;

}

});
const latestTitle = document.getElementById("latestTitle");
const latestDescription = document.getElementById("latestDescription");
const latestWatchBtn = document.getElementById("latestWatchBtn");

fetch(API_URL)
.then(res => res.json())
.then(data => {

const dramas = data.dramas || data;

if(dramas.length > 0){

latestTitle.innerText = dramas[0].title;

latestDescription.innerText = dramas[0].description;

latestWatchBtn.onclick = function(){
window.location.href = `episode.html?id=${dramas[0].id}`;
};

}

});
