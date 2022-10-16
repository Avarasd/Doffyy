/* Defining things */

const  music = document.getElementById("BackgroundM");
const  source = document.getElementById("source");
const  button = document.getElementById("playButton");
const phonkButton = document.getElementById("phonkButton");
const hardButton = document.getElementById("hardButton");
const objects = {
    phonkObject : [
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
        {
            name:   "Murder In My Mind",
            url:    "/music/Phonk/MIMM.mp3",
        },
        {
            name:   "Prince Of Darkness",
            url:    "/music/Phonk/Prince.mp3",
        },
        {
            name:   "Avoid Me",
            url:    "/music/Phonk/Avoid.mp3",
        },
        {
            name:   "S.X.N.D. N.X.D.E.S.",
            url:    "/music/Phonk/SendNudes.mp3",
        },
        {
            name:   "Overdose",
            url:    "/music/Phonk/Overdose.mp3",
        },
    ],
    
    hardObject : [
        {
            name: "BassSlut",
            url: "/music/Hard/BassSlut.mp3",
        },
    ], 
};


music.volume = 0.1;
let selectedObject;

/* Defining the music selecter function */

const musicSelect = function(selectedObject) {
    const  rand = Math.floor(Math.random() * selectedObject.length);
    source.src = selectedObject[rand].url;
    music.load();
    music.play();
    console.log("Playing " + selectedObject[rand].name);
    document.getElementById("Title").innerHTML = "Playing: "+ selectedObject[rand].name;
}

const randomMusic = function() {
    let keys = Object.keys(objects);
    const rand = Math.floor(Math.random() * keys.length);
    const randomObject = objects[keys[rand]];
    randommMusic = Math.floor(Math.random() * randomObject.length);
    source.src = randomObject[randommMusic].url;
    music.load();
    music.play();
    console.log("Playing " + randomObject[randommMusic].name);
    document.getElementById("Title").innerHTML = "Playing: "+ randomObject[randommMusic].name;
}

/* Button that plays new music */

button.onclick = function(){
    randomMusic();
}

/* If music ends calling the random music selecter and player function */

music.addEventListener('pause', function(){
    musicSelect(selectedObject);
});

/* Adding Buttons (In Progress) */

phonkButton.onclick = function(){
    selectedObject = objects["phonkObject"];
    musicSelect(selectedObject);
}

hardButton.onclick = function() {
    selectedObject = objects["hardObject"];
    musicSelect(selectedObject);
}