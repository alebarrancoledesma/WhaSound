(function() {
    const customSound = "data:audio/mp3;base64,//MP3ENBASE64AQUI"; 
    const OriginalAudio = window.Audio;
    window.Audio = function (src) {
        const audio = new OriginalAudio(customSound);
        const originalPlay = audio.play.bind(audio);
        audio.play = function () {
            try{audio.pause(); audio.currentTime = 0;}catch{}
            return originalPlay();
        };
        return audio;
    };
    window.Audio.prototype = OriginalAudio.prototype;
})();
