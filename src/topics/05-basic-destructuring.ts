interface AudioPlayer {
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details
}

interface Details {
    author: string;
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: "One Step Closer",
    details: {
        author: "Linkin Park",
        year: 2001
    }
}

const song = 'Breaking The Habit';

const { song:anotherSong,
        songDuration,
        details
} = audioPlayer;

const { author } = details;

// console.log('Song: ', anotherSong);
// console.log('Song: ', songDuration);
// console.log('Song: ', author);

const [ , , trunks = 'Not Found' ] = ['Goku', 'Vegeta']

console.log('Personaje 3:', trunks);
