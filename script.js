const dramas = [
{
title:"Kabhi Main Kabhi Tum",
category:"Pakistani",
image:"https://images.unsplash.com/photo-1517604931442-7e0c8ed2963c?w=600",
youtube:"https://youtube.com"
},
  {
title:"Tere Bin",
category:"Pakistani",
image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
youtube:"https://youtube.com"
},
  {
title:"Tere Bin",
category:"Pakistani",
image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=400",
youtube:"https://youtube.com"
},
{
title:"Kurulus Osman",
category:"Turkish",
image:"https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?w=600",
youtube:"https://youtube.com"
},
{
title:"Yeh Rishta Kya Kehlata Hai",
category:"Indian",
image:"https://images.unsplash.com/photo-1440404653325-ab127d49abc1?w=600",
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
