const songs = [
    "Love Story",
    "Blank Space",
    "Shake It Off",
    "All Too Well",
    "Cardigan",
    // Add more songs...
];

const today = new Date();
const dayOfYear = Math.floor((today - new Date(today.getFullYear(), 0, 0)) / 1000 / 60 / 60 / 24);
const songOfTheDay = songs[dayOfYear % songs.length];

document.getElementById("song").innerText = songOfTheDay;
