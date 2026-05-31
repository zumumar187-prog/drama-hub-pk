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
document.getElementById("dramaTitle").innerText =
"🎬 Kabhi Main Kabhi Tum";
episodes.forEach(ep => {

container.innerHTML += `
<div class="episode-card"
onclick="window.open('${ep.VideoLink}','_blank')">

<h3>📺 ${ep.EpisodeTitle}</h3>

<span>Click to Watch Episode</span>

</div>
`;

});

})
.catch(error => {

console.log(error);

document.getElementById("episodesContainer").innerHTML =
"<h2>API Error</h2>";

});
