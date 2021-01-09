import React from 'react';

const EmpList=(props)=>{
    
    return(
        <div>
        <div>
        <li>{props.text}</li>
        </div>
        <button onClick={()=>{props.onSelect(props.id)}}>Delete</button>
        </div>
    )
}
export default EmpList
