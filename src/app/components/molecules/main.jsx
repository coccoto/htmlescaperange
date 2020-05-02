import React from 'react'
// atoms
import Button from '@/app/components/atoms/button'
import Textarea from '@/app/components/atoms/input/textarea'
import Output from '@/app/components/atoms/output'
// styles
import styles from '@/app/styles/components/molecules/main.module.sass'

export default (props) => {

    const textareaRef = React.useRef()

    const [subject, setSubject] = React.useState('')

    const handleSubmit = () => {
        props.handleSubmit()
        textareaRef.current.handleSubmit()
    }

    return (
        <div className={styles['container']}>
            <div className={styles['container-1']}>
                <p className={styles['label']}>Source</p>
                <Textarea
                    setSubject={(i) => {setSubject(i)}}
                    ref={textareaRef}
                ></Textarea>
            </div>
            <div className={styles['container-2']}>
                <Button
                    onClick={() => {handleSubmit()}}
                    label={'Escape'}
                ></Button>
            </div>
            <div className={styles['container-3']}>
                <p className={styles['label']}>Result</p>
                <Output
                    subject={subject}
                    range={props.range}
                ></Output>
            </div>
        </div>
    )
}