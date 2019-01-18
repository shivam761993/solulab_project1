    // Writing the main logic for the stopwatch code in javascript.
    var ms = 0, s = 0, m = 0;
    var timer;
    
    

    // Storing the output values in newly defined variables.
    var stopwatch1 = document.querySelector('.stopwatch');
    var lapsContainer = document.querySelector('.laps');
    var historyLogs = document.querySelector(".but5").addEventListener('click',saveToLocalStorage);
                   

    function start() {
        if(!timer){
        timer = setInterval(run);
        }
    }

    // Most important function contains the whole logic of the code.
    function run() {
    // Special operators added here to minimise fluctuations in display.
        stopwatch1.textContent = (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s :s) + ":" + (ms < 10 ? "0" + ms :ms);
        ms++;
        if(ms == 100) {
            ms = 0;
            s++;
         }
        if(s == 60){
            s = 0;
            m++;
        }
    }

    // Another widely used function to stop the timer and return display.
    function stopTimer(){
        clearInterval(timer);
        timer = false;
    }
    // Here you can see the method used to display and get current time.
    function getTimer(){
        return (m < 10 ? "0" + m : m) + ":" + (s < 10 ? "0" + s :s) + ":" + (ms < 10 ? "0" + ms :ms);
    }

    function pause() {
        stopTimer();
    }

    function stop() {
        stopTimer();
        m = 0;
        ms = 0;
        s = 0;
    }
    
    function restart() {
        pause();
        start();
    }

    // Getting the current time and storing it as list items for displaying laps.
    function lap(){
        if(timer) {
            var li = document.createElement('li');
            li.innerText = getTimer();
            lapsContainer.appendChild(li);
         }
    }

    // Removing all the data and returning the start time.
    function resetLaps() { 
        if(timer){
        timer = false;
        lapsContainer.innerHTML = "";
        m = 0, ms = 0, s = 0;
        return (m) + ":" + (s) + ":" + (ms);
        }
     }
     
    function history(){
        }
    
    // Here I am storing time logs in local storage.
    function getFromLocalStorage() {
        let history;
        if(localStorage.getItem('historyls')==null) {
            history = [];
        } else {
            history = JSON.parse(localStorage.getItem('historyls'));
        }
        return history;
    }

    function saveToLocalStorage(){
        
        let history = getFromLocalStorage();
            {
                if(history.length >=10){
                    history.shift();
                }
            let timels = m + ':' + s + ':' + ms;
            history.push(timels);
            localStorage.setItem('historyls', JSON.stringify(history));
            
            }
    }

    