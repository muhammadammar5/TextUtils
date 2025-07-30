import React from 'react'

function Alert(props) {

    // just a function which capatilizes first digit of word
    const capitalize=(word)=>
    {
        const lower=word.toLowerCase()
        return lower.charAt(0).toUpperCase() + lower.slice(1)
    }
    return (
        // and operator to evaluate null or not
        <div style={{height:'50px'}}>
        {props.alert && <div className={`alert alert-${props.alert.type}`} role="alert"> 
            <strong>{capitalize(props.alert.type)}</strong>:{props.alert.msg}
        </div>}
        </div>
    )
}

export default Alert
