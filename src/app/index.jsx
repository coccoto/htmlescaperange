import React from 'react'
// molecules
import Header from '@/app/components/molecules/header'
import Home from '@/app/components/molecules/home'
import Footer from '@/app/components/molecules/footer'
// styles
import styles from '@/app/styles/index.module.sass'

export default () => {

    return (
        <div className={styles['container']}>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    )
}
