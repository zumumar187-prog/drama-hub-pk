const dramas = [
{
title:"Kabhi Main Kabhi Tum",
category:"Pakistani",
image:"https://picsum.photos/400/250?1",
youtube:"https://youtube.com"
},
{
title:"Kurulus Osman",
category:"Turkish",
image:"https://picsum.photos/400/250?2",
youtube:"https://youtube.com"
},
{
title:"Yeh Rishta Kya Kehlata Hai",
category:"Indian",
image:"https://picsum.photos/400/250?3",
youtube:"https://youtube.com"
}
];

const container = document.getElementById("dramaContainer");

dramas.forEach(drama => {
container.innerHTML += `
<div class="card">
<img src="${drama.image}">
<h3>${drama.title}</h3>
<p>${drama.category}</p>
<a href="${drama.youtube}" target="_blank">
<button>Watch Now</button>
</a>
</div>
`;
});
