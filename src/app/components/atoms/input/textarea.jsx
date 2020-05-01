import React from 'react'

export default React.forwardRef((props, ref) => {

    React.useImperativeHandle(ref, () => ({
        handleSubmit: () => {
            props.setSubject(subject)
        }
    }))

    const [subject, setSubject] = React.useState('')

    return (
        <textarea onChange={(event) => {setSubject(event.target.value)}}></textarea>
    )
})