import React from 'react'
// styles
import styles from '@/app/styles/components/templates/hint.module.sass'

export default () => {

    return (
        <article className={styles['container']}>
            <section className={styles['container-width']}>
                <h2 className={styles['headline']}>
                    HTML EscapeRange について
                </h2>
                <div className={styles['sentence']}>
                    <p>入力された内容の「From」から「To」までに指定した範囲内にある「&amp;」「&lt;」「&gt;」「&quot;」「&apos;」をエスケープします。</p>
                    <p>特定のタグ内（範囲内）だけをエスケープされたい時などにご利用ください。</p>
                </div>
            </section>
        </article>
    )
}