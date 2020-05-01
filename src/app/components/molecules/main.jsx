import React from 'react'
// atoms
import Button from '@/app/components/atoms/button'
import Textarea from '@/app/components/atoms/input/textarea'
import Output from '@/app/components/atoms/output'

export default (props) => {

    const textareaRef = React.useRef()

    const [subject, setSubject] = React.useState('')

    const handleSubmit = () => {
        props.handleSubmit()
        textareaRef.current.handleSubmit()
    }

    return (
        <div>
            <Textarea
                setSubject={(i) => {setSubject(i)}}
                ref={textareaRef}
            ></Textarea>
            <Button
                onClick={() => {handleSubmit()}}
                label={'escape'}
            ></Button>
            <Output
                subject={subject}
                scope={props.scope}
            ></Output>
        </div>
    )
}