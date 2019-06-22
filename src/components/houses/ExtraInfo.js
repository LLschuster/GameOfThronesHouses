import React from 'react'


const ExtraInfo = (props) => {
    if (props.info !=='') {
    return (
        <div>
        {props && 
        <div className='card light darken-1'>
            <span className='card-title'>{props.info}</span>
        </div>
        }
        </div>
    )
    } else {
        return (<div></div>)
    }
}

export default ExtraInfo