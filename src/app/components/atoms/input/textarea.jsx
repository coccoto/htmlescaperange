import React from 'react'
// styles
import styles from '@/app/styles/components/atoms/input/textarea.module.sass'

export default React.forwardRef((props, ref) => {

    React.useImperativeHandle(ref, () => ({
        handleSubmit: () => {
            props.setSubject(subject)
        }
    }))

    const [subject, setSubject] = React.useState('')

    return (
        <textarea
            className={styles['textarea']}
            onChange={(event) => {setSubject(event.target.value)}}
        ></textarea>
    )
})