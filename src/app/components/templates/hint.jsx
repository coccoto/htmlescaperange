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
                    <p>入力された内容の <span>From</span> から <span>To</span> までに指定した範囲内にある特殊文字を全てエスケープします。</p>
                    <p>特定のタグ内（範囲内）だけをエスケープされたい時などにご活用ください。</p>
                    <p>不具合・ご意見等ございましたら <a href='https://twitter.com/coccoto'>@coccoto（Twitter）</a> までご連絡いただけましたら幸いです。</p>
                </div>
            </section>
        </article>
    )
}