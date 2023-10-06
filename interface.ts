interface Player {
    currentSong: string;
    currentSongLength: number;
    playNext: () => void;
    playPrevious: () => void;
}

const player : Player = {
    currentSong: "Going Out",
    currentSongLength: 35_000,
    playNext: function (): void {
        throw new Error("Function not implemented.");
    },
    playPrevious: function (): void {
        throw new Error("Function not implemented.");
    }
}