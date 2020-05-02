import React from 'react'
// organisms
import Home from '@/app/components/organisms/home'
// templates
import Header from '@/app/components/templates/header'
import Hint from '@/app/components/templates/hint'
import Footer from '@/app/components/templates/footer'
// styles
import styles from '@/app/styles/index.module.sass'

export default () => {

    return (
        <div className={styles['container']}>
            <Header></Header>
            <Home></Home>
            <Hint></Hint>
            <Footer></Footer>
        </div>
    )
}
