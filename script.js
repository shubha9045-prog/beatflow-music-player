alert("Script Connected");
const audio = document.getElementById("audio");

const playBtn = document.getElementById("play");

const songTitle = document.querySelector(".player h2");
const artist = document.querySelector(".player p");
const cover = document.querySelector(".player img");

const playlist = document.querySelectorAll(".song");

const songs = [

{
title:"Kesariya",
artist:"Arijit Singh",
audio:"song1.mp3",
cover:"cover1.jpg"
},

{
title:"Raataan Lambiyan",
artist:"Jubin Nautiyal",
audio:"song2.mp3",
cover:"cover2.jpg"
},

{
title:"Sunflower",
artist:"Post Malone",
audio:"song3.mp3",
cover:"cover3.jpg"
},

{
title:"Perfect",
artist:"Ed Sheeran",
audio:"song4.mp3",
cover:"cover4.jpg"
},

{
title:"Believer",
artist:"Imagine Dragons",
audio:"song5.mp3",
cover:"cover5.jpg"
},

{
title:"Photograph",
artist:"Ed Sheeran",
audio:"song6.mp3",
cover:"cover6.jpg"
},

{
title:"Husn",
artist:"Anuv Jain",
audio:"song7.mp3",
cover:"cover7.jpg"
},

{
title:"Tum Hi Ho",
artist:"Arijit Singh",
audio:"song8.mp3",
cover:"cover8.jpg"
},

{
title:"Choo Lo",
artist:"The Local Train",
audio:"song9.mp3",
cover:"cover9.jpg"
},

{
title:"The Night We Met",
artist:"Lord Huron",
audio:"song10.mp3",
cover:"cover10.jpg"
}

];

playlist.forEach((song,index)=>{

song.addEventListener("click",()=>{

audio.src=songs[index].audio;

cover.src=songs[index].cover;

songTitle.innerText=songs[index].title;

artist.innerText=songs[index].artist;

audio.play();

playBtn.innerHTML="⏸";

});

});

playBtn.addEventListener("click",()=>{

if(audio.paused){

audio.play();

playBtn.innerHTML="⏸";

}else{

audio.pause();

playBtn.innerHTML="▶";

}

});