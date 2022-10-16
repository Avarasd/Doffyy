/* Defining things */
var music = document.getElementById("BackgroundM");
var source = document.getElementById("source");
var musicArray = [
    "/music/Cruel.mp3",
    "/music/Ragnarok.mp3",
    "/music/Berserk.mp3",
    "/music/Wrath.mp3",
    "/music/Immaculate.mp3",
    "/music/BassSlut.mp3"
]
music.volume = 0.1;

/* Selecting random music from array function */
var musicSelect = function() {
    if(music.paused) {
        var rand = Math.floor(Math.random() * musicArray.length)
        musicArray[rand]
        source.src = musicArray[rand]
        music.load();
        music.play();
        console.log("Playing " + source.src)
    }
    
}
/* Detecting user interaction to prevent user didn't interact with document error */
document.addEventListener('click', function() {
    musicSelect()
})

/* If music ends calling the random music selecter and player function */
music.addEventListener('pause', function(){
    musicSelect()
})

