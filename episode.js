const API_URL =
"https://script.google.com/macros/s/AKfycbyPkk2psZGdwAsqDsQdMvKCtIvYeQpHDqb51ffFiJ3BPEaOCe5AcoY07zZ59gCXTOGe-g/exec";

const params = new URLSearchParams(window.location.search);
const dramaId = params.get("id");

fetch(API_URL)
.then(res => res.json())
.then(data => {

const container =
document.getElementById("episodesContainer");

const episodes =
data.episodes.filter(
ep => String(ep.DramaID) === String(dramaId)
);

episodes.forEach(ep => {

container.innerHTML += `
<div style="
background:#111;
padding:15px;
margin:10px 0;
border-radius:10px;
cursor:pointer;
"
onclick="window.open('${ep.VideoLink}')">

<h3>${ep.EpisodeTitle}</h3>

</div>
`;

});

});
