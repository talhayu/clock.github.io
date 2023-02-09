var hours=0
var minutes=0
var seconds=0

function al(){  
  setInterval(tal, 1000)

  function tal(){
    seconds++
    if(seconds >=60){
        seconds =0
        minutes++
    }
     if(minutes >=60){
        minutes=0
        hours++
    }
     if(hours >=24){
        hours=0;
        minutes=0;
        seconds=0;
    }
   displayHours=hours;
   displayMinutes=minutes;
   displaySecond=seconds;
    if(seconds < 10){
        displaySecond="0"+displaySecond
    }
    if( minutes < 10){
        displayMinutes="0"+ displayMinutes
    }
    if(hours < 10){
        displayHours="0"+displayHours
    }
    document.getElementById("clock").innerHTML=displayHours+":"+displayMinutes+":"+displaySecond;
}

}

