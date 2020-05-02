import React from 'react'
// styles
import styles from '@/app/styles/components/templates/header.module.sass'

export default () => {

    return (
        <header className={styles['container']}>
            <h1
                className={styles['headline']}
            >HTML EscapeRange</h1>
        </header>
    )
}