const timerBtn = document.querySelector('.timer-btn'),
    stopBtn = document.querySelector('.stop-btn'),

    timerCounter = document.querySelector('.timer-counter'),
    stopCounter = document.querySelector('.stop-counter'),
    startBtn = document.querySelector('.start-btn'),
    timerStopBtn = document.querySelector('.timer-stop-btn'),
    resetBtn = document.querySelector('.reset-btn'),
    timerMinutes = document.querySelector('.timer-minutes'),
    timerSeconds = document.querySelector('.timer-seconds'),
    stopSeconds = document.querySelector('.stop-seconds'),
    stopMSeconds = document.querySelector('.stop-mSeconds'),
    volumeIcon = document.querySelector('.fa-volume-low'),
    timeline = document.querySelector('.timeline');




// timer tap button
timerBtn.addEventListener('click', () => {
    timerBtn.classList.add('active')
    stopBtn.classList.remove('active')

    stopCounter.style.display = 'none'
    timerCounter.style.display = 'block'
    volumeIcon.style.display = 'inline-block'
    timeline.style.display = 'block'

    // removing timer input if it was on
    if (timerInput.style.display == 'block') {
        timerInput.style.display = 'none'
    }

    startBtn.style.display = 'inline-block'
    timerStopBtn.style.display = 'none'
})

// stop watch tap button
stopBtn.addEventListener('click', () => {
    stopBtn.classList.add('active')
    timerBtn.classList.remove('active')

    timerCounter.style.display = 'none'
    stopCounter.style.display = 'block'
    volumeIcon.style.display = 'none'
    timeline.style.display = 'none'

    startBtn.style.display = 'inline-block'
    timerStopBtn.style.display = 'none'
})

// setInterval decelerations 
let timerInterval;
let counterInterval;

startBtn.addEventListener('click', () => {
    // changes on timer when we click start button
    if (timerBtn.classList[1] === 'active') {
        startBtn.style.display = 'none'
        timerStopBtn.style.display = 'inline-block'
        let timeLineWidth = timeline.offsetWidth;
        timerCounter.style.borderBottom = 'none'
        timerInterval = setInterval(() => {
            if (timerSeconds.textContent == 00 && timerMinutes.textContent == 0) {
                clearInterval(timerInterval)
            } else if (timerSeconds.textContent == 00) {
                timerSeconds.textContent = 59;
                timerMinutes.textContent = timerMinutes.textContent - 1
                timeLineWidth = timeLineWidth + 1.83;
                timeline.style.width = `${timeLineWidth}px`

                if (timerBtn.classList[1] === 'active' && timerStopBtn.style.display == 'none') {
                    startBtn.style.display = 'none'
                    timerStopBtn.style.display = 'inline-block'
                }

            } else {
                timerSeconds.textContent -= 1;
                timeLineWidth = timeLineWidth + 2.03;
                timeline.style.width = `${timeLineWidth}px`

                if (timerBtn.classList[1] === 'active' && timerStopBtn.style.display == 'none') {
                    startBtn.style.display = 'none'
                    timerStopBtn.style.display = 'inline-block'
                }
            }
        }, 1000)
    }

    // changes on stop watch when we click start button
    if (stopBtn.classList[1] === 'active') {
        startBtn.style.display = 'none'
        timerStopBtn.style.display = 'inline-block'
        counterInterval = setInterval(() => {
            if (stopMSeconds.textContent < 99) {
                stopMSeconds.textContent = Number(stopMSeconds.textContent) + 1;


                if (stopBtn.classList[1] === 'active' && timerStopBtn.style.display == 'none') {
                    startBtn.style.display = 'none'
                    timerStopBtn.style.display = 'inline-block'
                }
            } else {
                stopSeconds.textContent = Number(stopSeconds.textContent) + 1;
                stopMSeconds.textContent = 0;
                stopMSeconds.textContent = stopMSeconds.textContent + 1;

                if (stopBtn.classList[1] === 'active' && timerStopBtn.style.display == 'none') {
                    startBtn.style.display = 'none'
                    timerStopBtn.style.display = 'inline-block'
                }
            }
        }, 10)
    }
})

timerStopBtn.addEventListener('click', () => {
    // stopping timer events when clicking stop button
    if (timerBtn.classList[1] === 'active') {
        clearInterval(timerInterval)
        startBtn.style.display = 'inline-block'
        timerStopBtn.style.display = 'none'
        timerCounter.style.borderBottom = '2px solid #303135'
    }

    // stopping stop watch events when clicking stop button
    if (stopBtn.classList[1] === 'active') {
        clearInterval(counterInterval)
        startBtn.style.display = 'inline-block'
        timerStopBtn.style.display = 'none'
    }
})

resetBtn.addEventListener('click', () => {
    // resting timer when clicking reset button
    if (timerBtn.classList[1] === 'active') {
        clearInterval(timerInterval)
        timerMinutes.textContent = 5;
        timerSeconds.textContent = '00';
        timeline.style.width = 0;
        startBtn.style.display = 'inline-block'
        timerStopBtn.style.display = 'none'
        timerCounter.style.borderBottom = '2px solid #303135'
    }

    // resting stop watch when clicking reset button
    if (stopBtn.classList[1] === 'active') {
        clearInterval(counterInterval)
        stopSeconds.textContent = 0;
        stopMSeconds.textContent = '00';
        startBtn.style.display = 'inline-block'
        timerStopBtn.style.display = 'none'
    }
})


// adding onload eventlistener 
window.addEventListener('load', () => {
    // changes on timer when we load the page for first time
    if (timerBtn.classList[1] === 'active') {
        startBtn.style.display = 'none'
        timerStopBtn.style.display = 'inline-block'
        let timeLineWidth = timeline.offsetWidth;
        timerCounter.style.borderBottom = 'none'
        timerInterval = setInterval(() => {
            if (timerSeconds.textContent == 00 && timerMinutes.textContent == 0) {
                clearInterval(timerInterval)
            } else if (timerSeconds.textContent == 00) {
                timerSeconds.textContent = 59;
                timerMinutes.textContent = timerMinutes.textContent - 1
                timeLineWidth = timeLineWidth + 1.83;
                timeline.style.width = `${timeLineWidth}px`

                if (timerBtn.classList[1] === 'active' && timerStopBtn.style.display == 'none') {
                    startBtn.style.display = 'none'
                    timerStopBtn.style.display = 'inline-block'
                }

            } else {
                timerSeconds.textContent -= 1;
                timeLineWidth = timeLineWidth + 1.83;
                timeline.style.width = `${timeLineWidth}px`

                if (timerBtn.classList[1] === 'active' && timerStopBtn.style.display == 'none') {
                    startBtn.style.display = 'none'
                    timerStopBtn.style.display = 'inline-block'
                }
            }
        }, 1000)
    }
})


//input for the timer code
const timerInput = document.querySelector('.timer-counter-input')

timerInput.addEventListener('keypress', (e) => {
    if (e.key == "Enter") {
        let timerTimeArray = timerInput.value.split('');
        let timerMinutesValue = `${timerTimeArray[0]? timerTimeArray[0] : 0}${timerTimeArray[1]? timerTimeArray[1] : 0}`
        let timerSecondsValue = `${timerTimeArray[2]? timerTimeArray[2] : 0}${timerTimeArray[3]? timerTimeArray[3] : 0}`
        timerCounter.style.display = 'block'
        timerMinutes.textContent = timerMinutesValue
        timerSeconds.textContent = timerSecondsValue
    }
});