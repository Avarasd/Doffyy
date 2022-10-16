/* Defining things */

const  music = document.getElementById("BackgroundM");
const  source = document.getElementById("source");
const  button = document.getElementById("myButton")
const  musicObject = [
    {
        name:   "Cruel",
        url:    "/music/Phonk/Cruel.mp3",
    },
    {
        name:   "Ragnarok",
        url:    "/music/Phonk/Ragnarok.mp3",
    },
    {
        name:   "Berserk",
        url:    "/music/Phonk/Berserk.mp3",
    },
    {
        name:   "Wrath",
        url:    "/music/Phonk/Wrath.mp3",
    },
    {
        name:   "Immaculate",
        url:    "/music/Phonk/Immaculate.mp3",
    },
    {
        name:   "Shadow",
        url:    "/music/Phonk/Shadow.mp3",
    },
    {
        name:   "Midnight",
        url:    "/music/Phonk/Midnight.mp3",
    },
]
music.volume = 0.1;

/* Selecting random music from array function */

function musicSelect() {
    /*
    if(music.paused) {
    */
        const  rand = Math.floor(Math.random() * musicObject.length)
        source.src = musicObject[rand].url
        music.load();
        music.play();
        console.log("Playing " + musicObject[rand].name)
     
}

/* Detecting user interaction to prevent user didn't interact with document error */

document.addEventListener("click", musicSelect)

/* If music ends calling the random music selecter and player function */
music.addEventListener('pause', musicSelect)


