import React from 'react'
// hooks
import useEscape from '@/app/hooks/useEscape'
// styles
import styles from '@/app/styles/components/atoms/input/textarea.module.sass'

export default (props) => {

    const [value, setValue] = React.useState('')

    React.useEffect(() => {
        const range = props.range

        if (range.open !== '' && range.close !== '' && props.subject !== '') {
            setValue(useEscape(props.subject, props.range))
        }
    }, [props.subject, props.range])

    return (
        <textarea
            className={styles['textarea']}
            defaultValue={value}
        ></textarea>
    )
}