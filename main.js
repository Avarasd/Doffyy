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
            url:    "./music/Phonk/Cruel.mp3",
        },
        {
            name:   "Ragnarok",
            url:    "./music/Phonk/Ragnarok.mp3",
        },
        {
            name:   "Berserk",
            url:    "./music/Phonk/Berserk.mp3",
        },
        {
            name:   "Wrath",
            url:    "./music/Phonk/Wrath.mp3",
        },
        {
            name:   "Immaculate",
            url:    "./music/Phonk/Immaculate.mp3",
        },
        {
            name:   "Shadow",
            url:    "./music/Phonk/Shadow.mp3",
        },
        {
            name:   "Midnight",
            url:    "./music/Phonk/Midnight.mp3",
        },
        {
            name:   "Murder In My Mind",
            url:    "./music/Phonk/MIMM.mp3",
        },
        {
            name:   "Prince Of Darkness",
            url:    "./music/Phonk/Prince.mp3",
        },
        {
            name:   "Avoid Me",
            url:    "./music/Phonk/Avoid.mp3",
        },
        {
            name:   "S.X.N.D. N.X.D.E.S.",
            url:    "./music/Phonk/SendNudes.mp3",
        },
        {
            name:   "Overdose",
            url:    "./music/Phonk/Overdose.mp3",
        },
        {
            name:   "Joka Da",
            url:    "./music/Phonk/JokaDa.mp3",
        },
    ],
    
    hardObject : [
        {
            name: "BassSlut",
            url: "./music/Hard/BassSlut.mp3",
        },
        {
            name: "Legend",
            url: "./music/Hard/Legend.mp3",
        },
        {
            name: "Frozen In Time",
            url: "./music/Hard/FrozenInTime.mp3",
        },
        {
            name: "Mystique",
            url: "./music/Hard/Mystique.mp3",
        },
    ], 
};

music.volume = 0.1;

let playingSong;
let selectedObject;
let randomiser

/* Defining the music selecter function */

const musicSelect = function(selectedObject) {
    const  rand = Math.floor(Math.random() * selectedObject.length);
    if (selectedObject[rand].url != playingSong) {
        source.src = selectedObject[rand].url;
        playingSong = source.src;
        console.log("Playing " + selectedObject[rand].name);
        document.getElementById("Title").innerHTML = "Playing: "+ selectedObject[rand].name;
    }
    else {

    /* Making it that its impossible to get the same music consecutive times */
        if (selectedObject[rand] == selectedObject.length) {
            source.src = selectedObject[rand -1].url;
        }
        else{
            
            source.src = selectedObject[rand+1].url;
            playingSong = source.src;
            console.log("Playing " + selectedObject[rand+1]);
            document.getElementById("Title").innerHTML = "Playing: "+ selectedObject[rand+1];
        }
    }
    music.load();
    music.play();
};

/* Random music from random Object function */

const randommusic = function() {
    let keys = Object.keys(objects);
    const rand = Math.floor(Math.random() * keys.length);
    const randomObject = objects[keys[rand]];
    let randommMusic = Math.floor(Math.random() * randomObject.length);
    source.src = randomObject[randommMusic].url;

    /* If the song that will be played is the same as the song before, change it */
    
    if (source.src == playingSong) {

        

        if (randomObject[randommMusic] == randomObject.length) {

            /* Check if the song is the last song in the object, if so then pick a new song another way to prevent error */

            source.src = randomObject[randommMusic - 1].url
            console.log("Playing " + randomObject[randommMusic - 1].name);
            document.getElementById("Title").innerHTML = "Playing: "+ randomObject[randommMusic - 1].name;
        }else{
            source.src = randomObject[randommMusic + 1].url
            console.log("Playing " + randomObject[randommMusic + 1].name);
            document.getElementById("Title").innerHTML = "Playing: "+ randomObject[randommMusic + 1].name;
        }
    }else{
        console.log("Playing " + randomObject[randommMusic].name);
        document.getElementById("Title").innerHTML = "Playing: "+ randomObject[randommMusic].name;
    }

    music.load();
    music.play();
    playingSong = source.src
    
}

/* Button that plays new music */

button.onclick = function(){
    randommusic();
    selectedObject = randomiser;
}

/* If music ends calling the random music selecter and player function */

music.addEventListener('pause', function(){
    if (selectedObject != randomiser) {
        musicSelect(selectedObject);
    }else{
        randommusic();
    }
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
