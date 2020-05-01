import React from 'react'
// hooks
import useEscape from '@/app/hooks/useEscape'

export default (props) => {

    const [value, setValue] = React.useState('')

    React.useEffect(() => {
        const scope = props.scope

        if (scope.open !== '' && scope.close !== '' && props.subject !== '') {
            setValue(useEscape(props.subject, props.scope))
        }
    }, [props.subject, props.scope])

    return (
        <textarea defaultValue={value}></textarea>
    )
}