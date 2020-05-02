import React from 'react'

export default React.forwardRef((props, ref) => {

    React.useImperativeHandle(ref, () => ({
        handleSubmit: () => {
            props.setRange(range)
        }
    }))

    const [range, setRange] = React.useState('')

    return (
        <input
            onChange={(event) => {setRange(event.target.value)}}
        ></input>
    )
})