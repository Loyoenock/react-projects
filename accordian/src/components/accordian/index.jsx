// Single selection
// Multiple selectionrt 
import './styles.css'
import data from "../accordian/data"

import { useState } from "react"

export default function Accordian () {
    const [selected, setSelected] = useState(null)

    function handleSingleSelection(getCurrentId) {
        setSelected(getCurrentId === selected ? null : getCurrentId)
    }

    return <div className="wrapper">
        <div className="accordian">
        { data && data.length > 0 ? 
                data.map((dataItem) => (
                    <div className="item">
                        <div className="title" onClick={() => handleSingleSelection(dataItem.id)}>
                            <h3>{dataItem.question}</h3>
                            <span>+</span>
                        </div>
                        <div className='content'>
                        {
                            selected === dataItem.id ?
                            <div>{dataItem.answer}</div>
                            : null
                        }
                        </div>                        
                    </div>
                ))
             : <div>No data found !</div>
        }
        </div> 
       
     </div>
}