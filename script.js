console.log("Welcome to Sotify");

//Intialize Event
let songIndex=0;
let audioElement=new Audio('./songs/1.mp3');
let masterPlay=document.getElementById('masterPlay');
let myProgressBar=document.getElementById('myProgressBar');
let gif=document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let songItems=Array.from(document.getElementsByClassName('songItem'));

let songs=[
    {songName: "Bad Liar ", filePath: "./songs/1.mp3", coverPath: "./Pictures/cover1.jpg"},
    {songName: "Jhuki Nazar", filePath: "./songs/2.mp3", coverPath: "./Pictures/cover2.jpg"},
    {songName: "Main Rang", filePath: "./songs/3.mp3", coverPath: "./Pictures/cover3.jpg"},
    {songName: "Tum Se Hi ", filePath: "./songs/4.mp3", coverPath: "./Pictures/cover4.jpg"},
    {songName: "Dandelions ", filePath: "./songs/5.mp3", coverPath: "./Pictures/cover5.jpg"},
    {songName: "Apna Bana le ", filePath: "./songs/6.mp3", coverPath: "./Pictures/cover6.jpg"},
    {songName: "Meri Maa ", filePath: "./songs/7.mp3", coverPath: "./Pictures/cover7.jpg"},
    {songName: "Teri Ore ", filePath: "./songs/8.mp3", coverPath: "./Pictures/cover8.jpg"},
    {songName: "Te Amo ", filePath: "./songs/9.mp3", coverPath: "./Pictures/cover9.jpg"},
    {songName: "Phir Kabhi ", filePath: "./songs/10.mp3", coverPath: "./Pictures/cover10.jpg"},

   
]
songItems.forEach((element, i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src= songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText= songs[i].songName;
    console.log("hello")
})

//   audioElement.play();

//Handle Play pause
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity=1;

    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity=0;

    }
})

//Listen to Event
audioElement.addEventListener('timeupdate', ()=>{
    progress=parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime=myProgressBar.value*audioElement.duration/100;
})
const makeAllPlays= ()=>{
   
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');     
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText=songs[songIndex].songName;   
        audioElement.currentTime=0;
        audioElement.play();
        gif.style.opacity=1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })

})
document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>9)
    {songIndex=0;}
    else{ 
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0)
    {songIndex=0;}
    else{
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songsIndex].songName;
    audioElement.currentTime=0;
    audioElement.play();
    gif.style.opacity=1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})