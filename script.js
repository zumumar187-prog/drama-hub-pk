const dramas = [
{
title:"Kabhi Main Kabhi Tum",
category:"Pakistani",
image:"https://picsum.photos/300/400?1",
youtube:"https://youtube.com"
},
{
title:"Tere Bin",
category:"Pakistani",
image:"https://picsum.photos/300/400?2",
youtube:"https://youtube.com"
},
{
title:"Kurulus Osman",
category:"Turkish",
image:"https://picsum.photos/300/400?3",
youtube:"https://youtube.com"
},
{
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
<div class="card">
<img src="${drama.image}">
<h3>${drama.title}</h3>
<p>${drama.category}</p>
<a href="${drama.youtube}" target="_blank">
<button>Watch Now</button>
</a>
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
