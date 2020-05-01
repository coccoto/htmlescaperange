import React from 'react'

export default React.forwardRef((props, ref) => {

    React.useImperativeHandle(ref, () => ({
        handleSubmit: () => {
            props.setScope(scope)
        }
    }))

    const [scope, setScope] = React.useState('')

    return (
        <input
            onChange={(event) => {setScope(event.target.value)}}
        ></input>
    )
})