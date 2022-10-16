/* Defining things */
const  music = document.getElementById("BackgroundM");
const  source = document.getElementById("source");
const  button = document.getElementById("button")
const  musicObject = [
    {
        name:   "Cruel",
        url:    "/music/Cruel.mp3",
    },
    {
        name:   "Ragnarok",
        url:    "/music/Ragnarok.mp3",
    },
    {
        name:   "Berserk",
        url:    "/music/Berserk.mp3",
    },
    {
        name:   "Wrath",
        url:    "/music/Wrath.mp3",
    },
    {
        name:   "Immaculate",
        url:    "/music/Immaculate.mp3",
    },
    {
        name:   "BassSlut",
        url:    "/music/BassSlut.mp3",
    }
]
music.volume = 0.1;

/* Selecting random music from array function */
function musicSelect() {
    if(music.paused) {
        const  rand = Math.floor(Math.random() * musicObject.length)
        source.src = musicObject[rand].url
        music.load();
        music.play();
        console.log("Playing " + musicObject[rand].name)
    } 
}
/* Detecting user interaction to prevent user didn't interact with document error */
button.addEventListener('click', function() {
    musicSelect()
})

/* If music ends calling the random music selecter and player function */
music.addEventListener('pause', function(){
    musicSelect()
})

