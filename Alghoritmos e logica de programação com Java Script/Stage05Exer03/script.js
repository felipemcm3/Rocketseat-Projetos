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

function resetControls() {
    buttonPlay.classList.remove('hide')
    buttonPause.classList.add('hide')
    buttonStop.classList.add('hide')
    buttonSet.classList.remove('hide')
}

function updateTimerDisplay(minutes, seconds) {
    minutesDisplay.textContent = String(minutes).padStart(2, "0")
    secondsDisplay.textContent = String(seconds).padStart(2, "0")
}

function countdown() {
    timeTimerout = setTimeout(function() {
        let seconds = Number(secondsDisplay.textContent)
        let minutes = Number(minutesDisplay.textContent)

        
        if(minutes <= 0 && seconds <= 0) {
            resetControls()
            return
        }
        

        if( seconds <= 0){
            seconds = 10
            --minutes
        }

        
        updateTimerDisplay(minutes, String(seconds -1))


        countdown()
    }, 1000)
    
}

function resetTimer() {
    updateTimerDisplay(minutes, 0)
    clearTimeout(timeTimerout)
}

buttonPlay.addEventListener('click', function() {
    buttonPlay.classList.add('hide')
    buttonPause.classList.remove('hide')
    buttonSet.classList.add('hide')
    buttonStop.classList.remove('hide')
    
    countdown()
})

buttonPause.addEventListener('click', function() {
    buttonPause.classList.add('hide')
    buttonPlay.classList.remove('hide')
    clearTimeout(timeTimerout)
})

buttonStop.addEventListener('click', function() {
    resetControls()
    resetTimer()
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






