import React from "react";

function Searchitem(props){
    let data=[]
    if(window.localStorage.getItem("recent")!=null){
        data = window.localStorage.getItem("recent").split(",")
    }
   
    return (
    <div className="searchitems">
    <p className="searchsug" id="recent">Recently searched for...</p>
        {(()=>{
            const suggestions=[]
            for(let i=0; i<data.length ; i++){
            
            suggestions.push(<p className="searchsug" onClick={props.sugcl}> {data[data.length-1-i]}</p>)
        }
        return suggestions;
        })()}
        
    </div>
    )
}

export default Searchitem;