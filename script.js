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

  const hero = document.querySelector(".hero");

if (dramas.length > 0) {

const latestDrama = dramas[0];

hero.style.backgroundImage =
`linear-gradient(rgba(0,0,0,.75),rgba(0,0,0,.75)),
url('${latestDrama.thumbnail}')`;

hero.style.backgroundSize = "cover";
hero.style.backgroundPosition = "center";
hero.style.backgroundRepeat = "no-repeat";

}

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
