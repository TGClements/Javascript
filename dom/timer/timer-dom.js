window.onload = function() {
    console.log("time to start the timer!");

    let buttons = document.getElementsByTagName("Button");
    let sec = 0; // set the scope for seconds so that time is recorded when timer is stopped
    let min = 0; // set the scope for minutes so that time is recorded when timer is stopped

    let interval = 0; // set the scope for interval so every function can access it

    buttons[0].addEventListener("click", function() { // adding a listener to start the timer
        interval = setInterval(start, 1000); // set the timer interval to 1000ms (1s) - this invokes the start function after 1000ms
    });

    buttons[1].addEventListener("click", function() { // adding listener to stop/pause the timer
        clearInterval(interval); // clear the interval, effectively stopping it. because sec and min are defined outside the function, if "start" is clicked again, it will resume where it left off
    });

    buttons[2].addEventListener("click", function() { // adding listener to reset the timer
        sec = 00; // reset the seconds
        min = 0; // reset the minutes

        let timerVal = document.getElementsByTagName("p")[0];
        timerVal.innerHTML = min.toString(10) + ":0" + sec.toString(10); // update the p tag with the reset values
    });

    function start() {

        if(sec < 59) { // increment from 0-59, do not let it increment past 59
            sec++;
        }
        else { // if it wants to increment past 59, reset the seconds, then increase minutes by 1
            sec = 00;
            min++;
        }

        let timerVal = document.getElementsByTagName("p")[0];
            
        if(sec < 10)
            timerVal.innerHTML = min.toString(10) + ":0" + sec.toString(10); // update the p tag with the new time. if seconds are <10, add in a 0, otherwise it will display like "1:2" instead of "1:02"
        else 
            timerVal.innerHTML = min.toString(10) + ":" + sec.toString(10); // update the p tag with the new time. if seconds are >10, there is no issue.
    }
}