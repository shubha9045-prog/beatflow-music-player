const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const shuffleBtn = document.getElementById("shuffle");
const repeatBtn = document.getElementById("repeat");

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
},
{
title:"sayiraa",
artist:"lokesh singh",
audio:"song11.mp3",
cover:"cover11.jpg"
},
{
title:"dekhte dekhte",
artist:"nusrat feteh",
audio:"song12.mp3",
cover:"cover12.jpg"
}

];

let currentSong = 0;
let isShuffle = false;
let isRepeat = false;

function getRandomSong(){
    if(songs.length <= 1) return currentSong;
    let nextIndex = currentSong;
    while(nextIndex === currentSong){
        nextIndex = Math.floor(Math.random() * songs.length);
    }
    return nextIndex;
}

function loadSong(index){

audio.src = songs[index].audio;
cover.src = songs[index].cover;
songTitle.innerText = songs[index].title;
artist.innerText = songs[index].artist;

}

loadSong(currentSong);

playlist.forEach((song,index)=>{

song.addEventListener("click",()=>{

currentSong=index;

loadSong(currentSong);

audio.play();

playBtn.innerHTML="⏸";

});

});

playBtn.addEventListener("click",()=>{

if(audio.src==""){
loadSong(currentSong);
}

if(audio.paused){

audio.play();
playBtn.innerHTML="⏸";

}else{

audio.pause();
playBtn.innerHTML="▶";

}

});




// ================= NEXT BUTTON =================

const nextBtn = document.getElementById("next");

nextBtn.addEventListener("click",()=>{

    if(isShuffle){
        currentSong = getRandomSong();
    } else {
        currentSong++;
        if(currentSong >= songs.length){
            currentSong = 0;
        }
    }

    loadSong(currentSong);
    audio.play();
    playBtn.innerHTML="⏸";

});

// ================= PREVIOUS BUTTON =================

const prevBtn = document.getElementById("prev");

prevBtn.addEventListener("click",()=>{

    currentSong--;

    if(currentSong < 0){
        currentSong = songs.length - 1;
    }

    loadSong(currentSong);
    audio.play();
    playBtn.innerHTML="⏸";

});

shuffleBtn.addEventListener("click", ()=>{
    isShuffle = !isShuffle;
    shuffleBtn.classList.toggle("active", isShuffle);
    if(isShuffle){
        isRepeat = false;
        repeatBtn.classList.remove("active");
    }
});

repeatBtn.addEventListener("click", ()=>{
    isRepeat = !isRepeat;
    repeatBtn.classList.toggle("active", isRepeat);
    if(isRepeat){
        isShuffle = false;
        shuffleBtn.classList.remove("active");
    }
});

// ================= AUTO NEXT =================

audio.addEventListener("ended",()=>{

    if(isRepeat){
        loadSong(currentSong);
        audio.play();
        return;
    }

    if(isShuffle){
        currentSong = getRandomSong();
    } else {
        currentSong++;
        if(currentSong >= songs.length){
            currentSong = 0;
        }
    }

    loadSong(currentSong);
    audio.play();

});

// ================= SEARCH =================

const searchInput = document.getElementById("searchSong");
const noResults = document.getElementById("noResults");

searchInput.addEventListener("keyup",function(){

    const value=this.value.toLowerCase();
    let anyVisible = false;

    playlist.forEach(song=>{

        if(song.innerText.toLowerCase().includes(value)){
            song.style.display="flex";
            anyVisible = true;

        }else{
            song.style.display="none";
        }

    });

    if(anyVisible){
        noResults.style.display = "none";
    } else {
        noResults.style.display = "block";
    }

});

// ================= VOLUME =================

const volumeSlider=document.getElementById("volume");

audio.volume=0.7;

volumeSlider.value=70;

volumeSlider.addEventListener("input",()=>{

    audio.volume=volumeSlider.value/100;

});

// ================= PROGRESS BAR =================

const progress=document.getElementById("progress");
const currentTime=document.getElementById("currentTime");
const duration=document.getElementById("duration");

audio.addEventListener("timeupdate",()=>{

    progress.max=audio.duration;
    progress.value=audio.currentTime;

    let min=Math.floor(audio.currentTime/60);
    let sec=Math.floor(audio.currentTime%60);

    if(sec<10) sec="0"+sec;

    currentTime.innerHTML=min+":"+sec;

});

audio.addEventListener("loadedmetadata",()=>{

    let min=Math.floor(audio.duration/60);
    let sec=Math.floor(audio.duration%60);

    if(sec<10) sec="0"+sec;

    duration.innerHTML=min+":"+sec;

});

progress.addEventListener("input",()=>{

    audio.currentTime=progress.value;

});



