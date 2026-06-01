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
  const drama = data.dramas.find(
d => String(d.id) === String(dramaId)
);

if(drama){

document.getElementById("dramaTitle").innerHTML =
`🎬 ${drama.title} <span style="font-size:18px;color:#aaa;">(${episodes.length} Episodes)</span>`;

document.getElementById("dramaDesc").innerText =
drama.description || "";

document.getElementById("dramaPoster").src =
drama.thumbnail || "";

}
episodes.forEach(ep => {

container.innerHTML += `
<div class="episode-card"
onclick="playVideo('${ep.VideoLink}')"
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

function playVideo(videoUrl){

const videoContainer = document.getElementById("videoContainer");

videoContainer.innerHTML = `
<iframe
width="100%"
height="500"
src="${videoUrl}"
frameborder="0"
allowfullscreen>
</iframe>
`;

window.scrollTo({
top:0,
behavior:"smooth"
});

}
