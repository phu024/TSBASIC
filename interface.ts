interface Player {
  currentSong: string;
  currentSongLength: number;
  playNext: () => void;
  playPrevious: () => void;
}

const player: Player = {
  currentSong: "Going Out",
  currentSongLength: 35_000,
  playNext: () => console.log("Playing next"),
  playPrevious: () => console.log("Playing pervious"),
};

type song = { name: string; length: number };

class AudioPlayer implements Player {
  currentSong: string;
  currentSongLength: number;

  constructor(songInfo: song) {
    this.currentSong = songInfo.name;
    this.currentSongLength = songInfo.length;
  }

  playNext = () => console.log("Playing next");
  playPrevious = () => console.log("Playing pervious");

  stopAudio = () => {};
}

const audioPlayer = new AudioPlayer({
  name: "Today is a new day",
  length: 35_000,
});

const anotherAudioPlayer = new AudioPlayer({
    name: "Shape of you",
    length: 35_000,
  });

console.log(player);
console.log(audioPlayer.currentSong,audioPlayer.currentSongLength);
console.log(anotherAudioPlayer.currentSong,anotherAudioPlayer.currentSongLength,anotherAudioPlayer.playNext)

