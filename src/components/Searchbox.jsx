import React,{useState} from "react";
import Autocomplete from "react-google-autocomplete";
import Searchitem from "./Searchitem";




function Searchbox(props){
  

    return (<div>
    <div className="form-div">
    
    <form className="" action="/api" method="post" onSubmit={props.onclick}>
      <div className="box-div">
      {/* <p> {address}</p> */}
      <Autocomplete 
      apiKey = "AIzaSyAoxJ2u3AhCleLbWnUYJf5_nLqGb_9NgkI"
      className="search-box"
      id="sinput"
      onChange={props.handleChange}
      onClick={props.handcl}
      onPlaceSelected={(place)=>console.log(place)}/>
         {/* <input name="searchBox" className="search-box" placeholder="Search" onChange={props.handleChange}></input> */}
     {props.sow?
      <Searchitem sugcl={props.sugcl}/>:<div></div>}

    
     
      
      {/* <PlacesAutocomplete
        value={address}
        onChange={setAddress}

        onSelect={handleSelect}
      >
        {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input className="search-box" id="search"
              {...getInputProps({
                placeholder: 'Search Places ...',
                
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: "#000000", cursor: 'pointer' }
                  : {};
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </PlacesAutocomplete> */}
      </div>

      <div className="button-div">
      <button type="submit" name="button" className="search-button"><i className="fa-solid fa-magnifying-glass"></i></button>
      
</div>
    </form><form action="" onSubmit={props.handleYrSubmit}>
      <button type="submit" className="location-button"><i class="fa-solid fa-location-arrow"></i></button>
     
    </form>
    
    
  </div><div>

  </div></div>)
}

export default Searchbox;