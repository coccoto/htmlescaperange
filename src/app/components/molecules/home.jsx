import React from 'react'
// molecules
import Main from '@/app/components/molecules/main'
import Scope from '@/app/components/molecules/scope'

export default () => {

    const scopeRef = React.useRef()

    const [open, setOpen] = React.useState('')
    const [close, setClose] = React.useState('')

    const handleSubmit = () => {
        scopeRef.current.handleSubmit()
    }

    return (
        <div>
            <Scope
                ref={scopeRef}
                setOpen={(i) => {setOpen(i)}}
                setClose={(i) => {setClose(i)}}
            ></Scope>
            <Main
                scope={{open: open, close: close}}
                handleSubmit={() => {handleSubmit()}}
            ></Main>
        </div>
    )
}