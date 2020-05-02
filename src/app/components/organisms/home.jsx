import React from 'react'
// molecules
import Main from '@/app/components/molecules/main'
import Range from '@/app/components/molecules/range'
// styles
import styles from '@/app/styles/components/organisms/home.module.sass'

export default () => {

    const rangeRef = React.useRef()

    const [open, setOpen] = React.useState('')
    const [close, setClose] = React.useState('')

    const handleSubmit = () => {
        rangeRef.current.handleSubmit()
    }

    return (
        <div className={styles['container']}>
            <div className={styles['container-width']}>
                <Range
                    ref={rangeRef}
                    setOpen={(i) => {setOpen(i)}}
                    setClose={(i) => {setClose(i)}}
                ></Range>
                <Main
                    range={{open: open, close: close}}
                    handleSubmit={() => {handleSubmit()}}
                ></Main>
            </div>
        </div>
    )
}