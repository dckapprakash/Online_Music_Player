

let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");

let next_btn = document.querySelector(".next");
let prev_btn = document.querySelector(".previous");

let seek_slider = document.querySelector(".seek_slider");
let volume_slider = document.querySelector(".volume_slider");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");

let songaudio = document.querySelector("#song");

let pause = document.querySelector('.pause')
let play = document.querySelector('.play')

let track_list = [
    {
        name: "Ayyayo-Nenju.mp3",
        artist: "G.V.prakash",
        image: "./img/aadukalam1.jpeg",
        path: "./songs/Ayyayo-Nenju.mp3"
    },

    {
        name: "Ellam valla theivam.mp3",
        artist: "Magarishi",
        image: "./img/image1.jpg",
        path: "./songs/yt5s.com - Ellam Valla Deivam Athu Vethathiri Maharishi New Song 2021 (128 kbps).mp3"
    },
    {
        name: "Chilla chilla.mp3",
        artist: "Aniruth",
        image: "./img/download .jpeg",
        path: "./songs/Chilla-Chilla-MassTamilan.dev.mp3",
    },
    {
        name: "vaa vaathi.mp3",
        artist: "Aniruth",
        image: "./img/vaathi.jpeg",
        path: "./songs/Vaa Vaathi.mp3",
    }
];
songaudio.onloadeddata = () => {
    seek_slider.max = songaudio.duration;
}

let i = 0;

track_art.src = track_list[i].image
track_name.innerText = track_list[i].name
track_artist.innerText = track_list[i].artist
songaudio.src = track_list[i].path




play.addEventListener("click", () => {
    songaudio.play()
    play.style.display = 'none'
    pause.style.display = 'block'
    track_art.classList.add("track-art1");
    seek_slider.value = songaudio.currentTime

    setInterval(() => {
        seek_slider.value = songaudio.currentTime
        add()
    }, 500)

})

pause.addEventListener("click", () => {
    songaudio.pause()
    play.style.display = 'block';
    pause.style.display = 'none';
    track_art.classList.remove("track-art1");
})


next_btn.addEventListener("click", () => {
    i++
    if (i == track_list.length) {
        i = 0
    }
    track_art.src = track_list[i].image
    track_name.innerText = track_list[i].name
    track_artist.innerText = track_list[i].artist
    songaudio.src = track_list[i].path

    if (play.style.display == "none") {
        songaudio.play()
    }
    else {
        songaudio.pause()
    }
})

prev_btn.addEventListener("click", () => {
    i--
    if (i == -1) {
        i = track_list.length - 1
    }
    track_art.src = track_list[i].image
    track_name.innerText = track_list[i].name
    track_artist.innerText = track_list[i].artist
    songaudio.src = track_list[i].path

    if (play.style.display == "none") {
        songaudio.play()
    }
    else {
        songaudio.pause()
    }
})




seek_slider.addEventListener("input", () => {

    add()
    songaudio.currentTime = seek_slider.value
    if (play.style.display == 'none') {

        songaudio.play()

    }
    else if (pause.style.display != 'none') {

        songaudio.pause()

    }


})



volume_slider.addEventListener("input", () => {
    songaudio.volume = volume_slider.value

})

function add() {
    currentMinutes = Math.floor(songaudio.currentTime / 60)
    currentSeconds = Math.floor(songaudio.currentTime - (currentMinutes * 60))

    durationMinutes = Math.floor(songaudio.duration / 60)
    durationSeconds = Math.floor(songaudio.duration - (durationMinutes * 60))

    if (currentSeconds < 10) {
        currentMinutes = "0" + currentMinutes
        currentSeconds = "0" + currentSeconds
    }
    if (currentSeconds > 9) {
        currentMinutes = "0" + currentMinutes

    }
    if (durationSeconds < 10) {
        durationSeconds = "0" + durationSeconds
    }

    curr_time.innerText = `${currentMinutes}:${currentSeconds}`;
    total_duration.innerText = `${durationMinutes}:${durationSeconds}`;



}













