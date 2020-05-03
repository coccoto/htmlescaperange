/**
 * @param {string} subject
 * @param {string} range
 * @return {string}
 */
export default (subject, range) => {

    return slice(subject, range.open, range.close)
}

/**
 * 文字列を分解、処理し置換処理を実行する。
 * 
 * @param {string} subject
 * @param {string} open
 * @param {string} close
 * @param {number} point
 * @param {number} loop 無限ループ防止（一時的）
 * @return {string}
 */
const slice = (subject, open, close, point = 0, loop = 0) => {

    // 無限ループを監視する。
    loop = infinite(loop)

    // 指定の文字列までの各文字数を取得する。
    const index = count(subject, open, close, point)

    // 指定の文字列が全て存在しない場合、置換を終了する。
    if (index.open === -1) {
        return subject
    }

    // 文字列を分割にする。
    const piece = split(subject, open, point, index)
    // エスケープを実行する。
    piece.content = replace(piece.content)

    // 文字を繋ぎ合わせ置換処理を実行する。
    const result = piece.last + piece.open + piece.content + piece.close
    // 文字数からエントリーポイントを取得する。
    const nextPoint = piece.last.length + piece.open.length + piece.content.length + close.length

    // 再帰的に処理する。
    return slice(result, open, close, nextPoint, loop)
}

/**
 * 指定の文字列までの文字数を取得する。
 * 
 * @param {string} subject
 * @param {string} open
 * @param {string} close
 * @param {number} point
 * @return {array}
 */
const count = (subject, open, close, point) => {

    return {
        open: subject.indexOf(open, point),
        close: subject.indexOf(close, point + open.length),
    }
}

/**
 * 文字列を分解する。
 * 
 * @param {string} subject
 * @param {string} open
 * @param {number} point
 * @param {array} index
 * @return {array}
 */
const split = (subject, open, point, index) => {

    return {
        last: subject.substring(0, point),
        open: subject.substring(point, index.open + open.length),
        content: subject.substring(index.open + open.length, index.close),
        close: subject.substring(index.close),
    }
}

/**
 * 文字列を置換する。
 * 
 * @param {string} subject
 * @return {string}
 */
const replace = (subject) => {

    return subject
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&apos;')
}

/**
 * 指定の回数以上ループしていた場合、無限ループと推定し停止する。（一時的）
 * 
 * @param {number} loop 
 */
const infinite = (loop) => {

    if (loop > 30) {
        throw new Error('Error')
    }

    loop = loop + 1
    return loop
}