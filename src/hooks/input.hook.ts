import React, {useState} from 'react'

export function useInput(initialValue:any) {
    const [value, setValue] = useState(initialValue)

    const onChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setValue(event.target.value)
    }

    return {value, onChange}
}