export function functionTime() {
    const clickCircle = document.querySelector('#circle');

    const ballSeconds = document.querySelector('.ballSeconds');
    const ballMinutes = document.querySelector('.ballMinutes');
    const ballHours = document.querySelector('.ballHours');

    const textSeconds = document.querySelector('.textSeconds');
    const textMinutes = document.querySelector('.textMinutes');
    const textHours = document.querySelector('.textHours');

    const dateNow = new Date();
    let hours = dateNow.getHours();
    let minutes = dateNow.getMinutes();
    let seconds = dateNow.getSeconds();

    function StylesByHours() {
        let heightBall = (100 / 24) * (24 - hours);
        ballHours.style.height = `${heightBall}%`;
        textHours.innerText = hours.toString().padStart(2, '0');

        if (hours > 23) {
            hours = 0;
            StylesByHours();
        }
    }

    function StylesByMinutes() {
        let heightBall = (100 / 60) * (60 - minutes);
        ballMinutes.style.height = `${heightBall}%`;
        textMinutes.innerText = minutes.toString().padStart(2, '0');

        if (minutes >= 59 && seconds == 0) {
            minutes = 0;
            hours++;
            StylesByMinutes();
            StylesByHours();
        }
    }

    function StylesBySeconds() {
        setInterval(function () {
            let heightBall = (100 / 60) * (60 - seconds);
            ballSeconds.style.height = `${heightBall}%`;
            if (seconds > 59) {
                seconds = 0;
                minutes++;
                StylesByMinutes();
            }
            textSeconds.innerText = seconds.toString().padStart(2, '0');
            seconds++;
        }, 1000);
    }

    StylesBySeconds();
    StylesByMinutes();
    StylesByHours();
}
