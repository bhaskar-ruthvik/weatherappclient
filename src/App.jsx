
import React,{useState,useEffect} from "react";

import Map from "./components/Map"

import Searchbox from "./components/Searchbox"

import Time from "./components/Time"
import Weather from "./components/Weather"


function App() {
  let arr=[]
  let count=0;
  const [sow,setSow]=useState(false);
useEffect(()=>{
  fetch("/localpost",{
    method: "POST",
    headers: {"Content-type": "application/json"},
    body: JSON.stringify({"sug" : window.localStorage.getItem("recent") })

  }).then(
    response =>{

    console.log(response)
  })
},[])
function handcl(){
  if(sow){
setSow(false)
  }
  else{
    setSow(true);
  }
}

function sugcl(e){
  console.log(e.target)
  document.getElementById("sinput").value = e.target.innerText;
}
  // function contains(arr,newt){
  //   for(let i=0;i<arr.length;i++){
  //     if(arr[i]==newt){
  //       return true
  //     }
    
  //   }
  //   return false
  // }
  //   function addSearch(newSearch){
   
  //   if(prevSearch.length>5){
  //     prevSearch.shift()
  //   }
  //   console.log(contains(prevSearch,newSearch))
  //   if(!contains(prevSearch,newSearch)){
  //     prevSearch.push(newSearch);
  //   }
  // }  

  const [backendData, setBackendData] = useState([{}]);
  const [location,setLocation] = useState({"lat" : 17.3850,"lon" : 78.4867}); 
 let data 
 if(window.localStorage.getItem("recent")!=null){
  data= window.localStorage.getItem("recent").split(",")
 }
 else{
  data = []
 }
  
  function getLoc(){
    navigator.geolocation.getCurrentPosition(function(data){
      const lat = data.coords.latitude
  setLocation({
    "lat" : lat,
    "lon" : data.coords.longitude
  });
  },
  console.log);
  }
  

  function handleMapClick(e){
      console.log(e.latLng.lat())
      setLocation({
          "lat" : e.latLng.lat(),
          "lon" : e.latLng.lng()
      })
   
      
     
      
  }

const [button,setButton] =useState(false);
const [buttonText,setButtonText]=useState("");
function handleChange(event){
 setButtonText(event.target.value);
 handcl()
}
function handleYrSubmit(){
  setShow(false)
    if(button){
      setButton(false);
    } else {
    setButton(true);
    }
    console.log(location)
  fetch("/yourlocation",{
    method : "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({"lat" : location.lat, "lon" : location.lon}),
  }).then(
    response => {
      return response.json();
      
    }
  ).then(
    data => {
      
      console.log(data);
      if(data!=null){
      setBackendData(data)
      }
    }
    
  )}

function handleSubmit(event){
  
  console.log(event.target[0].value);
  if(button){
    setButton(false);
  } else {
  setButton(true);
  }
  const searchArr = event.target[0].value.split(", ")

  const newtext = searchArr[0]+", "+searchArr[1];

  setButtonText(newtext);
arr.push(searchArr[0])
//   prevSearch.push(searchArr[0]);
//  addSearch(searchArr[0]);
  fetch("/api",{
    method: "POST",
    headers: {"Content-Type" : "application/json"},
    body: JSON.stringify({"text": newtext}),
  }).then(
    response => {
     
      return response.json();
    }
  ).then(
    data => {
      console.log(data);
     
        window.localStorage.setItem("recent",data.arr)
      
    
      if(data!=null){
      setBackendData(data)
      }
    }
    
  )
  
  

}
const [show,setShow] =useState(false);
function showMap(){
if(show){
  setShow(false)
}
else{
  setShow(true);
}
}
let isN = false
if(backendData==null){
  isN = true
}

     
  return (<div className="bgimage main">
  
    
  {button? <div><Weather feelslike={backendData.feelslike} humidity={backendData.humidity} windspeed={backendData.windspeed} temp={backendData.temp} tempDec={backendData.tempDec} location={backendData.location} desc={backendData.desc} id={backendData.weatherid} min={backendData.min} max={backendData.max}/></div>: <div>
  <div className="heading-div"> 
    <h1 className="heading">Want to know the current weather?</h1>
    
  </div>
  <Searchbox sugcl={sugcl} sow={sow} handcl={handcl} handleYrSubmit={handleYrSubmit} onclick={handleSubmit} handleChange={handleChange}/>
  <Time showmap={showMap} onc={getLoc}/></div>}
 {show? <div className="map">
 <button onClick={showMap} className="mapclose"> X</button>
 <button onClick={handleYrSubmit} className="mapbutton">Go</button>
  <Map oncl={handleMapClick} lat={location.lat} lon={location.lon}/>
  </div>: <div></div>}
  </div>
  );
}

export default App;
