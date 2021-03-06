import React from 'react'
// atoms
import Input from '@/app/components/atoms/input/input'
// styles
import styles from '@/app/styles/components/molecules/range.module.sass'

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
        <div className={styles['container']}>
            <div className={styles['container-width']}>
                <div>
                    <p className={styles['label']}>From</p>
                    <Input
                        ref={openRef}
                        setRange={props.setOpen}
                        placeholder={'<pre>'}
                    ></Input>
                </div>
                <div>
                    <p className={styles['label']}>To</p>
                    <Input
                        ref={closeRef}
                        setRange={props.setClose}
                        placeholder={'</pre>'}
                    ></Input>
                </div>
            </div>
        </div>
    )
})