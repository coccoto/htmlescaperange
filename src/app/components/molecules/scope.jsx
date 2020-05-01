import React from 'react'
// atoms
import Input from '@/app/components/atoms/input/input'

export default React.forwardRef((props, ref) => {

    const openRef = React.useRef()
    const closeRef = React.useRef()

    React.useImperativeHandle(ref, () => ({
        handleSubmit: () => {
            openRef.current.handleSubmit()
            closeRef.current.handleSubmit()
        }
    }))

    return (
        <div>
            <Input
                ref={openRef}
                setScope={props.setOpen}
            ></Input>
            <Input
                ref={closeRef}
                setScope={props.setClose}
            ></Input>
        </div>
    )
})