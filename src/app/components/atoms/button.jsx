import React from 'react'

export default (props) => {

    return (
        <button
            type={'button'}
            onClick={() => {props.onClick()}}>
        {props.label}</button>
    )
}