import React from 'react'
// hooks
import useEscape from '@/app/hooks/useEscape'
// styles
import styles from '@/app/styles/components/atoms/input/textarea.module.sass'

export default (props) => {

    const textareaRef = React.useRef()

    const [value, setValue] = React.useState('')

    React.useEffect(() => {
        const range = props.range

        if (range.open !== '' && range.close !== '' && props.subject !== '') {
            setValue(useEscape(props.subject, props.range))
        }
    }, [props.subject, props.range])

    const handleSubmit = () => {
        textareaRef.current.select()
        document.execCommand('copy');
    }

    return (
        <textarea
            ref={textareaRef}
            className={styles['textarea']}
            defaultValue={value}
            onClick={() => {handleSubmit()}}
        ></textarea>
    )
}