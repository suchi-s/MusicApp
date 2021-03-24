console.log("connected");

const music = document.querySelector('audio');
const play = document.getElementById("play");
const img = document.querySelector("img");
const artist = document.getElementById("artist");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const title = document.getElementById("title");

let isPlaying = false;
const songs = [
    {name:"1",title:"Paradinha",artist:"Anitta"},
    {name:"9",title:"Mera Deewanapan",artist:"Amrinder Gill"},
    {name:"3",title:"Proper Patola",artist:"Diljit Dosanjh"},
    {name:"4",title:"L's Theme",artist:"Hideki Taniuchi"},
    {name:"5",title:"Believer",artist:"Imagine Dragons"},
    {name:"7",title:"Let Me Hear",artist:"Fear, Loathin.."},
    {name:"8",title:"Barish",artist:"Ash King"},
]
const playMusic = () =>{
    isPlaying = true;
    music.play();
    play.classList.replace("fa-play-circle", "fa-pause");
    img.classList.add('anime');
}
//Pause
const pauseMusic = () => {
    isPlaying = false;
    music.pause();
    play.classList.replace("fa-pause","fa-play-circle");
    img.classList.remove('anime');
};

play.addEventListener('click', () => {
   isPlaying? pauseMusic():playMusic()
});

const loadSongs = (songs) =>{
    title.textContent = songs.title;
    artist.textContent = songs.artist;
    music.src = `music/${songs.name}.mp3`;
    img.src = `img/${songs.name}.jpg`;
}
songIndex = 0;

const nextSong = () => {
    songIndex = (songIndex+1)%songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}
const prevSong = () => {
    songIndex = (songIndex-1 + songs.length)%songs.length;
    loadSongs(songs[songIndex]);
    playMusic();
}

next.addEventListener("click", nextSong);
prev.addEventListener("click", prevSong);







