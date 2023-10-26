//hamburger button 
document.addEventListener("DOMContentLoaded", function () {
    const hamburgerIcon = document.getElementById("hamburger-icon");
    const body = document.body;

    hamburgerIcon.addEventListener("click", function () {
        body.classList.toggle("menu-open");
    });
});



//adding card and song in recommended place
var songs = [
    {
        imagename: "song8.jpg",
        songname: "Dil Nu",
        artistname: "Ap Dhillon",
        id : "1",
        playersong: "song8.mp3",
    },
    {
        imagename: "song1.jpg",
        songname: "Badtameez Dil",
        artistname: "Benny Dayal",
        id : "2",
        playersong: "song1.mp3",
    },
    {
        imagename: "song2.jpg",
        songname: "Ranjhana",
        artistname: "Akhil Sachdeva",
        id : "3",
        playersong: "song2.mp3",
    },
    {
        imagename: "song3.jpg",
        songname: "At My Worst",
        artistname: "Pink Sweat",
        id : "4",
        playersong: "song3.mp3",
    },
    {
        imagename: "song4.jpg",
        songname: "Choo lo",
        artistname: "The Local Train",
        id : "5",
        playersong: "song4.mp3",
    },
    {
        imagename: "song5.jpg",
        songname: "Janiye",
        artistname: "Vishal Mishra",
        id : "6",
        playersong: "song5.mp3",
    },
    {
        imagename: "song6.jpg",
        songname: "Samjho Na",
        artistname: "Aditya Rikhari",
        id : "7",
        playersong: "song6.mp3",
    },
    {
        imagename: "song7.jpg",
        songname: "Gumshuda",
        artistname: "Akshath",
        id : "8",
        playersong: "song7.mp3",
    },
];

var songList = document.getElementById("card");
var audioPlayer = document.getElementById("audioPlayer");
var currentSongIndex = 0;

function createSongCard(song) {
    var songDiv = document.createElement("div");
    songDiv.className = "card1";

    // Adding image from object to the card
    var image = document.createElement("img");
    image.style.width = "10vw";
    image.style.borderRadius = "1vw";
    image.src = song.imagename;
    songDiv.appendChild(image);

    var disc = document.createElement("div");
    disc.className = "disc";

    var namesong = document.createElement("div");
    namesong.className = "name-song";

    var songName = document.createElement("span");
    songName.textContent = song.songname;
    namesong.appendChild(songName);
    disc.appendChild(namesong);

    var artname = document.createElement("div");
    artname.className = "artist-name";

    var artistName = document.createElement("span");
    artistName.textContent = song.artistname;
    artname.appendChild(artistName);
    disc.appendChild(artname);

    songDiv.appendChild(disc);

    // Add a click event listener to the card element
    songDiv.addEventListener('click', function () {
        playSongById(song.id);
    });

    return songDiv;
}

function playSongById(id) {
    var song = songs.find(item => item.id === id);
    if (song) {
        audioPlayer.src = song.playersong;
        audioPlayer.load();
        audioPlayer.play();
    }
}

function playNextSong() {
    currentSongIndex = (currentSongIndex + 1) % songs.length; // Loop back to the first song when reaching the end
    var nextSong = songs[currentSongIndex];
    playSongById(nextSong.id);
}

audioPlayer.addEventListener('ended', playNextSong); // Automatically play the next song when the current one ends

// Create the playlist items in the HTML and add them to the "card" container
songs.forEach(song => {
    var songCard = createSongCard(song);
    songList.appendChild(songCard);
});

// // Play the first song initially
// playSongById(songs[0].id);