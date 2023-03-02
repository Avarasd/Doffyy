/* Defining things */

const  music = document.getElementById("BackgroundM");
const  source = document.getElementById("source");
const  button = document.getElementById("playButton");
const phonkButton = document.getElementById("phonkButton");
const hardButton = document.getElementById("hardButton");
const rapButton = document.getElementById("rapButton");
const videoChangerButton = document.getElementById("videoChanger")
const myVideo = document.getElementById("myVideo")
const invisibleMode = document.getElementById("invisibleMode")
let invisible = false

let  nowTheme = document.createElement("nowTheme")
nowTheme.setAttribute("src", "images/doffy.mp4")
nowTheme.setAttribute("type", "video/mp4")
nowTheme.setAttribute("currentVideo", "doffy")
myVideo.appendChild(nowTheme)
myVideo.play()
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

    rapObject : [
        {
            name: "No Snitching",
            url: "./music/Rap/NoSnitching.mp3",
        },
        {
            name: "Heart Of The City",
            url: "./music/Rap/HeartOfTheCity.mp3",
        },
        {
            name: "Niggas In Paris",
            url: "./music/Rap/NiggasInParis.mp3",
        },
        {
            name: "Billie Eilish",
            url: "./music/Rap/BillieEilish.mp3",
        },
    ],
};

music.volume = 0.1;

let playingSong;
let selectedObject;
let randomiser;

const videoChanger = function(){
   if (nowTheme.getAttribute("currentVideo") == "doffy"){
    myVideo.src = "images/luffy.mp4"
    nowTheme.setAttribute("currentVideo", "luffy")
   } else {
    myVideo.src = "images/doffy.mp4"
    nowTheme.setAttribute("currentVideo", "doffy")
   }
    myVideo.appendChild(nowTheme)
    myVideo.load()
    myVideo.play()
   console.log("New background video: " + nowTheme.getAttribute("currentVideo"))
}



/* Defining the music selecter function */

const musicSelect = function(selectedObject) {
    let keys = Object.keys(selectedObject);
    let rand = Math.floor(Math.random() * keys.length);
    //let rand = Math.floor(Math.random() * selectedObject.length);
    if (selectedObject[rand].url != playingSong) {
        source.src = selectedObject[rand].url;
        console.log("Playing " + selectedObject[rand].name);
        document.getElementById("Title").innerHTML = "Playing: "+ selectedObject[rand].name;
    } else {

    /* Making it that its impossible to get the same music consecutive times */

        if (selectedObject[rand] == selectedObject.length) {

            let selectedMusic = selectedObject[rand - 1]
            source.src = selectedMusic.url;
            console.log("Playing " + selectedMusic.name);
            document.getElementById("Title").innerHTML = "Playing: "+ selectedMusic.name;

        } else {

            let selectedMusic = selectedObject[rand + 1]
            source.src = selectedMusic.url;
            console.log("Playing " + selectedMusic.name);
            document.getElementById("Title").innerHTML = "Playing: "+ selectedMusic.name;

        }
    }

    playingSong = selectedObject[rand].url;
    music.load();
    music.play();

};

/* Random music from random Object function */

const randommusic = function() {

    let keys = Object.keys(objects);
    let rand = Math.floor(Math.random() * keys.length);
    let  randomObject = objects[keys[rand]];
    let randommMusic = Math.floor(Math.random() * randomObject.length);
    source.src = randomObject[randommMusic].url;

    /* If the song that will be played is the same as the song before, change it */

    if (source.src == playingSong) {

        if (randomObject[randommMusic] == randomObject.length) {

            /* Check if the song is the last song in the object, if so then pick a new song another way to prevent error */

            let  selectedMusic = randomObject[randommMusic - 1]
            source.src = selectedMusic.url;
            console.log("Playing " + selectedMusic.name);
            document.getElementById("Title").innerHTML = "Playing: "+ selectedMusic.name;

        } else {

            let selectedMusic = randomObject[randommMusic + 1]
            source.src = selectedMusic.url;
            console.log("Playing " + selectedMusic.name);
            document.getElementById("Title").innerHTML = "Playing: "+ selectedMusic.name;

        }

    } else {

        console.log("Playing " + randomObject[randommMusic].name);
        document.getElementById("Title").innerHTML = "Playing: "+ randomObject[randommMusic].name;

    }

    music.load();
    music.play();
    playingSong = source.src;
    
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
    } else {
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

rapButton.onclick = function() {
    selectedObject = objects["rapObject"];
    musicSelect(selectedObject);
}

invisibleMode.onclick = function() {
    if(invisible == false){
        button.hidden = true
        rapButton.hidden = true
        phonkButton.hidden = true
        hardButton.hidden = true
        videoChangerButton.hidden = true
        document.getElementById("Title").hidden = true
        invisible = true
    }
    else{
        button.hidden = false
        rapButton.hidden = false
        phonkButton.hidden = false
        hardButton.hidden = false
        videoChangerButton.hidden = false
        document.getElementById("Title").hidden = false
        invisible = false
    }
}

videoChangerButton.onclick = videoChanger