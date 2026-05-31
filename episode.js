const API_URL =
"https://script.google.com/macros/s/AKfycbyPkk2psZGdwAsqDsQdMvKCtIvYeQpHDqb51ffFiJ3BPEaOCe5AcoY07zZ59gCXTOGe-g/exec";

const params = new URLSearchParams(window.location.search);
const dramaId = params.get("id");

fetch(API_URL)
.then(res => res.json())
.then(data => {

console.log(data);

const container = document.getElementById("episodesContainer");

if(!data.episodes){
container.innerHTML = "<h2>No Episodes Found</h2>";
return;
}

const episodes = data.episodes.filter(
ep => String(ep.DramaID) === String(dramaId)
);

if(episodes.length === 0){
container.innerHTML = "<h2>No Episodes Found For This Drama</h2>";
return;
}

episodes.forEach(ep => {

container.innerHTML += `
<div style="
background:#111;
padding:15px;
margin:10px 0;
border-radius:10px;
cursor:pointer;
border:1px solid #333;
"
onclick="window.open('${ep.VideoLink}','_blank')">

<h3 style="color:white;">
📺 ${ep.EpisodeTitle}
</h3>

</div>
`;

});

})
.catch(error => {

console.log(error);

document.getElementById("episodesContainer").innerHTML =
"<h2>API Error</h2>";

});
