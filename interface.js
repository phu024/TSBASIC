var player = {
    currentSong: "Going Out",
    currentSongLength: 35000,
    playNext: function () { return console.log("Playing next"); },
    playPrevious: function () { return console.log("Playing pervious"); },
};
var AudioPlayer = /** @class */ (function () {
    function AudioPlayer(songInfo) {
        this.playNext = function () { return console.log("Playing next"); };
        this.playPrevious = function () { return console.log("Playing pervious"); };
        this.stopAudio = function () { };
        this.currentSong = songInfo.name;
        this.currentSongLength = songInfo.length;
    }
    return AudioPlayer;
}());
var audioPlayer = new AudioPlayer({
    name: "Today is a new day",
    length: 35000,
});
var anotherAudioPlayer = new AudioPlayer({
    name: "Shape of you",
    length: 35000,
});
console.log(player);
console.log(audioPlayer.currentSong, audioPlayer.currentSongLength);
console.log(anotherAudioPlayer.currentSong, anotherAudioPlayer.currentSongLength, anotherAudioPlayer.playNext);
