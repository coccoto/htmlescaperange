import React from 'react'
// styles
import styles from '@/app/styles/components/atoms/input/input.module.sass'

export default React.forwardRef((props, ref) => {

    React.useImperativeHandle(ref, () => ({
        handleSubmit: () => {
            props.setRange(range)
        }
    }))

    const [range, setRange] = React.useState('')

    return (
        <input
            className={styles['input']}
            onChange={(event) => {setRange(event.target.value)}}
        ></input>
    )
})