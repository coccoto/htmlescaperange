import React from 'react'
// molecules
import Main from '@/app/components/molecules/main'
import Scope from '@/app/components/molecules/scope'
// styles
import styles from '@/app/styles/components/molecules/home.module.sass'

export default () => {

    const scopeRef = React.useRef()

    const [open, setOpen] = React.useState('')
    const [close, setClose] = React.useState('')

    const handleSubmit = () => {
        scopeRef.current.handleSubmit()
    }

    return (
        <div className={styles['container']}>
            <div className={styles['container-width']}>
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
        </div>
    )
}