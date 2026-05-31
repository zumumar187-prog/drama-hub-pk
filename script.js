const dramas = [
{
id:1,
title:"Kabhi Main Kabhi Tum",
category:"Pakistani",
image:"https://picsum.photos/300/400?1",
youtube:"https://youtube.com"
},
{
id:2,
title:"Tere Bin",
category:"Pakistani",
image:"https://picsum.photos/300/400?2",
youtube:"https://youtube.com"
},
{
id:3,
title:"Kurulus Osman",
category:"Turkish",
image:"https://picsum.photos/300/400?3",
youtube:"https://youtube.com"
},
{
id:4,
title:"Yeh Rishta Kya Kehlata Hai",
category:"Indian",
image:"https://picsum.photos/300/400?4",
youtube:"https://youtube.com"
}
];

const latestContainer = document.getElementById("latestContainer");
const pakistaniContainer = document.getElementById("pakistaniContainer");
const turkishContainer = document.getElementById("turkishContainer");
const indianContainer = document.getElementById("indianContainer");

function createCard(drama){
return `
<div class="card" onclick="openDrama(${drama.id})">
<img src="${drama.image}">
<h3>${drama.title}</h3>
<p>${drama.category}</p>

<button onclick="openDrama(${drama.id})">
Watch Episodes
</button>

</div>
`;
}

dramas.forEach(drama => {

latestContainer.innerHTML += createCard(drama);

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

function openDrama(id){
window.location.href = `episode.html?id=${id}`;
}
