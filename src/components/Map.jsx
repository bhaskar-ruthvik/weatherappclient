import React, { useState } from "react";
import {GoogleMap, MarkerF, useJsApiLoader} from  "@react-google-maps/api";


function Map(props){
    const libraries = ['places'];
    
    const {isLoaded}= useJsApiLoader({
        googleMapsApiKey: "AIzaSyAoxJ2u3AhCleLbWnUYJf5_nLqGb_9NgkI",
        
    })
    let center = { lat: props.lat, lng : props.lon};
const [map,setMap] = useState(null)
    if(!isLoaded){
        return(<div><h1>Please wait map is loading</h1></div>)
    }else{
    
    return(
    <GoogleMap
    center = {center}
    zoom={18}
    mapContainerStyle={{width: "100%", height: "100%"}}
    onLoad={(map)=> setMap(map)}
    onClick = {props.oncl}>
<MarkerF position={center} />

    </GoogleMap>)}
}

export default Map;