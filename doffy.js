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
music.volume = 0.01;

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

document.addEventListener('click', function() {
    console.log(music.paused)
    musicSelect()
})

music.addEventListener('pause', function(){
    console.log("Music is paused")
    musicSelect()
})

