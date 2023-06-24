import React from "react";
import './Option.css'

const Option = ({item,setSelectedOption}) => {

    return(
        <div className="option" onClick={()=>setSelectedOption(item)}>
            <p>{item}</p>
        </div>
        )
}

export default Option