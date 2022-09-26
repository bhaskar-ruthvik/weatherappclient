import React from "react";


function Time(props){
    function getDay(day){
        switch(day){
          case 0:
            return "Sunday";
            break;
          case 1:
            return "Monday";
            break;
          case 2:
            return "Tuesday";
            break;
          case 3:
            return "Wednesday";
            break;
          case 4:
            return "Thursday";
            break;
          case 5:
            return "Friday";
            break;
          case 6:
            return "Saturday";
            break;
        default: 
        return "Not a valid date";
        }
      }
      function getMonth(month){
        switch(month+1){
          case 1:
            return "January";
            break;
          case 2:
            return "February";
            break;
          case 3:
            return "March";
            break;
          case 4:
            return "April";
            break;
          case 5:
            return "May";
            break;
          case 6:
            return "June";
            break;
          case 7:
            return "July";
            break;
          case 8:
            return "August";
            break;
          case 9:
            return "September";
            break;
          case 10:
            return "October";
            break;
          case 11:
            return "November";
            break;
          case 12:
            return "December";
            break;
        default:
            return "not a valid month";
        }
      }
      const today = new Date();
      const hours = today.getHours();
      const minutes = today.getMinutes();
      let min;
      if(today.getMinutes()<10){
        min = "0"+minutes;
      }else{
        min = minutes;
      }
      const time = hours+":"+min;
      const date1 = today.getDate();
      const day = getDay(today.getDay());
      const month = getMonth(today.getMonth());
      const date =day+ ", "+date1 +" "+ month;

      return (
        <div class="time"><div className="flex-container">
<div className="getlocdiv">
        <button onClick={props.onc} className="getloc"><i class="fa-solid fa-location-crosshairs"></i></button>
       <p className="button-suggestion">Get current location!</p>
        </div>
        <div className="getlocdiv map"> <button onClick={props.showmap} className="getloc"><i class="fa-sharp fa-solid fa-map-location-dot"></i></button><p className="button-suggestion">Choose location by map</p></div>
        </div>

  <h1 class="time-head">{time} {date}</h1>
  <h2 class="error" id="error"></h2>
</div>
      )
}

export default Time;