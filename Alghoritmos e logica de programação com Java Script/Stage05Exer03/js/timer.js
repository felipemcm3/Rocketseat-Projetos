function Timer(){
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

    return {
        countdown
    }
}
