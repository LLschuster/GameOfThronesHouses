import React from 'react'

const ActionButtons = (props) => {
    let actions = props.actions;
    console.log(actions);
    return (
        <div className='card-action'>
        {
    actions && actions.map(action => {
        return (<button className='waves-effect waves-teal btn-flat' onClick={action.onclick}>show {action.key}</button>)
    })}
    </div>
    )
    //return (<button className='waves-effect waves-teal btn-flat' onClick={()=>handleExtraData(value)}>show {key}</button>)
}

export default ActionButtons