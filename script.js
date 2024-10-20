// Array of Taylor Swift songs and their corresponding Spotify embed URLs
const songs = [
    { title: "Love Story", url: "https://open.spotify.com/track/1D4PL9B8gOg78jiHg3FvBb" },
    { title: "Blank Space", url: "https://open.spotify.com/track/1u8c2t2Cy7UBoG4ArRcF5g" },
    { title: "Shake It Off", url: "https://open.spotify.com/track/0V3wPSX9ygBnCm8psDIegu" }
];

// Function to get a random song
function getRandomSong() {
    const randomIndex = Math.floor(Math.random() * songs.length);
    return songs[randomIndex];
}

// Get a random song
const song = getRandomSong();

// Set the song title and iframe src
document.getElementById('song').innerText = song.title;
document.getElementById('songIframe').src = song.url;
