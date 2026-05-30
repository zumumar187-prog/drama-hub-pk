const dramas = [
{
title:"Kabhi Main Kabhi Tum",
category:"Pakistani",
youtube:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"
},
{
title:"Kurulus Osman",
category:"Turkish",
youtube:"https://www.youtube.com/watch?v=dQw4w9WgXcQ"
}
];

const container = document.getElementById("dramaContainer");

if(container){
dramas.forEach(drama=>{
container.innerHTML += `
<div style="background:#111;padding:15px;margin:10px;border-radius:10px;">
<h3>${drama.title}</h3>
<p>${drama.category}</p>
<a href="${drama.youtube}" target="_blank">
<button>Watch Now</button>
</a>
</div>
`;
});
}
