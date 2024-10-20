// Array of Taylor Swift songs and their corresponding Spotify embed URLs
/*
const songs = [
    { title: "Love Story", url: "2fPvQfGQEZOKtJ9qXeL4x8" },
    { title: "Blank Space", url: "1u8c2t2Cy7UBoG4ArRcF5g" },
    { title: "Shake It Off", url: "0V3wPSX9ygBnCm8psDIegu" }
];
*/

// Array of Taylor Swift songs and their corresponding Spotify track ids 
const songs = [
    { title: "Love Story", url: "2fPvQfGQEZOKtJ9qXeL4x8" },
    { title: "Blank Space", url: "1u8c2t2Cy7UBoG4ArRcF5g" },
    { title: "Shake It Off", url: "0V3wPSX9ygBnCm8psDIegu" },
    { title: "You Belong With Me", url: "7Ho8OJBsfJZ7SloqLF7Sf9" },
    { title: "I Knew You Were Trouble", url: "3GJ6AVi9YMt9NUzIyb5gCz" },
    { title: "We Are Never Ever Getting Back Together", url: "32Z4ioCoKKmGqT4Sffae5i" },
    { title: "Cardigan", url: "4R2kfaDFhslZEMJqAFNpdd" },
    { title: "Willow", url: "2b8fOow8UzyDFAE27YhOZM" },
    { title: "All Too Well", url: "7lQ8MOhq6IN2w8EYcFNSUk" },
    { title: "Wildest Dreams", url: "59HjlYCeBsxdI0fcm3zglw" },
    { title: "Delicate", url: "6NFyWDv5CjfwuzoCkw47YB" },
    { title: "Look What You Made Me Do", url: "1P17dC1amhFzptugyAO7Il" },
    { title: "The Man", url: "69vlMrzHwATKzupwNcUPyK" },
    { title: "Me!", url: "1fo2ctvGs7Uq52dwTpazsD" },
    { title: "Lover", url: "6ruYmcScxFhErKUpKPQg7o" },
    { title: "22", url: "0fuP0ykgrDSxk5odNU7Gy7" },
    { title: "Bad Blood", url: "2cYqizR4lgvp4Qu6IQ3qFN" },
    { title: "Teardrops On My Guitar", url: "5DA77EqppDmCTWGovd8e3N" },
    { title: "Style", url: "3fxkZbMaGg2TjuyRuJpPpZ" },
    { title: "Back to December", url: "3ExweHKZF9B752DPQByRVT" }
];


// Function to get a random song
function getRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
}

// Get a random song
const song = getRandomSong();

const song_url = "https://open.spotify.com/embed/track/".concat(song.url).concat("?utm_source=generator");

// Set the song title and iframe src
document.getElementById('song').innerText = song.title;
document.getElementById('spotify-player').src = song_url;
