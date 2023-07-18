let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let masterSongName = document.getElementById('masterSongName');
let gif = document.getElementById('gif');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: 'First Song', filePath: 'songs/1.mp3', coverPath: 'images/Downers-At-Dusk-Lyrics-Talha-Anjum-Wo-Lyrics.jpg'},
    {songName: 'Second Song', filePath: 'songs/2.mp3', coverPath: 'images/thumb-twelve-bilal-saeed-2012-300.jpg'},
    {songName: 'Third Song', filePath: 'songs/3.mp3', coverPath: 'images/3.jpg'},
    {songName: 'One', filePath: 'songs/4.mp3', coverPath: 'images/4.jpg'},
    {songName: 'One', filePath: 'songs/5.mp3', coverPath: 'images/5.jpg'},
    {songName: 'One', filePath: 'songs/6.mp3', coverPath: 'images/6.jpg'},
    {songName: 'One', filePath: 'songs/7.mp3', coverPath: 'images/7.jpg'},
    {songName: 'One', filePath: 'songs/8.mp3', coverPath: 'images/8.jpg'},
    {songName: 'One', filePath: 'songs/9.mp3', coverPath: 'images/9.jpg'},
    {songName: 'Tenth Song', filePath: 'songs/9.mp3', coverPath: 'images/10.jpg'},
]
songItems.forEach((element,i) => {
    element.getElementsByTagName('img')[0].src = songs[i].coverPath;
    element.getElementsByClassName('songName')[0].innerText = songs[i].songName
});


masterPlay.addEventListener('click', () => {
    if(audioElement.paused || audioElement.currentTime <=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else  {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
audioElement.addEventListener('timeupdate', () => {
    progress = parseInt((audioElement.currentTime/audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;
})
const makeAllPlay = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=> {
    element.addEventListener('click', (e) => {
        makeAllPlay();
        songIndex= parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity =1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex>=9) {
        songIndex = 0;
    } else {
        songIndex+=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity =1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})
document.getElementById('previous').addEventListener('click', ()=> {
    if(songIndex<=0) {
        songIndex = 0;
    } else {
        songIndex-=1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity =1;
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})