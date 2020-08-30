import { useState, ChangeEvent } from "react"

export const useInputBind = () => {
  const [value, setValue] = useState('')
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const clear = () => setValue('')
  return {
    bind: { value, onChange },
    clear,
    value
  }
}
