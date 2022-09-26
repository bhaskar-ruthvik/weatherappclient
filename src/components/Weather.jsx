import React,{useState} from "react";

function Weather(props){
const loc = props.location
  function handleClick(){
    const id = props.id;
   
    let bgclass;

    if(id>199 && id<299){
        bgclass = "thunderstorm";
      }
      else if(id>=300 && id<399){
        bgclass = "drizzle";
      }
      else if(id>=500 && id<599){
        bgclass = "rain";
      }
      else if(id>=600 && id<699){
        bgclass = "snow";
      }
      else if(id>=700 && id<799){
        bgclass = "atmosphere";
      }
      else if(id==800){
        bgclass = "clear";
      }
      else{
        bgclass = "clouds";
      }
      document.getElementsByTagName("body")[0].classList.add(bgclass);}
      handleClick();
     
     
    return (<div>
<div>{props.location==null?<h1 className="heading load show">Please wait while the weather loads</h1>:
        <h1 className="heading">Weather in {props.location}</h1>}
        {props.location==null?<h2 className="error show">Sorry the location is invalid... Please refresh the page to continue</h2>:<div><div class="container weather">
        <div className="temp-disp">
          <h1 className="search-heading">{props.temp}</h1>
           <h2 className="temp-dec">.{props.tempDec}</h2>
          <h1 className="search-heading degree">°</h1>
        </div>
        <div className="">
          <h2>{props.desc}</h2>
  
        </div>
        

        </div>
        <div class="minmax-div">
<h1>{console.log(props.pr)}</h1>
      <h2 class="minmax">Min: {props.min}°    Max: {props.max}°</h2>
  </div>
  <div className="extrainfo">
    <h2>Windspeed: {props.windspeed} km/h</h2>
    <h2>Humidity: {props.humidity}%</h2>
    <h2>Feels like: {props.feelslike}°</h2>
  </div></div>}
    </div>
       
    </div>
    )
}
export default Weather;