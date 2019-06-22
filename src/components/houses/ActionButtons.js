import React from 'react'

const ActionButtons = (props) => {
    let actions = props.actions;
    return (
        <div className='card-action'>
        {
    actions && actions.map((action,index) => {
        return (<button className='waves-effect waves-teal btn-flat' onClick={action.onclick} key={index}>show {action.key}</button>)
    })}
    </div>
    )
}

export default ActionButtons