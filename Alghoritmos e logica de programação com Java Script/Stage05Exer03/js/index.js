import Controls from "./controls"
import Timer from "./timer"

const buttonPlay = document.querySelector('.play')
const buttonPause = document.querySelector('.pause')
const buttonStop = document.querySelector('.stop')
const buttonSet = document.querySelector('.set')
const buttonSoundOn = document.querySelector('.sound-on')
const buttonSoundOff = document.querySelector('.sound-off')
const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
let minutes = Number(minutesDisplay.textContent)
let timeTimerout

const controls = Controls(
    buttonPlay,
    buttonPause,
    buttonSet,
    buttonStop
)
const timer = Timer(
    minutesDisplay,
    secondsDisplay,
    timeTimerout,
    resetControls
)


buttonPlay.addEventListener('click', function() {
    controls.play()
    timer.countdown()
})

buttonPause.addEventListener('click', function() {
    controls.pause()
    clearTimeout(timeTimerout)
})

buttonStop.addEventListener('click', function() {
    controls.reset()
    timer.reset()
})

buttonSoundOn.addEventListener('click', function() {
    buttonSoundOn.classList.add('hide')
    buttonSoundOff.classList.remove('hide')
})

buttonSoundOff.addEventListener('click', function() {
    buttonSoundOff.classList.add('hide')
    buttonSoundOn.classList.remove('hide')
})

buttonSet.addEventListener('click', function() {
    minutes = prompt('Quantos minutos?') || 0
    updateTimerDisplay(minutes, 0)
})



/*let play = document.querySelector('.play')
let pause = document.querySelector('.pause')

play.addEventListener('click', function iniciou)
pause.addEventListener('click', function pausou)

function iniciou() {
    play.classList.add('hide');
    pause.classList.remove('hide');
}

function pausou() {
    pause.classList.add('hide');
    play.classList.remove('hide');
}
*/






