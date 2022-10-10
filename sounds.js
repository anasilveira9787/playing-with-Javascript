export default function() {
    const buttonPlayAudio = new Audio("audio/play.mp3");
    const buttonPauseAudio = new Audio("audio/pause.mp3");
    const bgAudio = new Audio("audio/sadness-in-roads-to-nowhere.mp3");
    const clockTicking = new Audio("audio/clock-ticking-natural-room-verb.mp3");

    bgAudio.loop = true;
    clockTicking.loop = true;

    function pressButtonPlay() {
        buttonPlayAudio.play();
    }

    function pressButtonPause() {
        buttonPauseAudio.play();
    }

    function bgAudioPlay() {
        bgAudio.play();
        clockTicking.play();
    }

    function bgAudioPause() {
        bgAudio.pause();
        clockTicking.pause();
    }

    return {
        pressButtonPlay,
        pressButtonPause,
        bgAudioPlay,
        bgAudioPause
    }
}