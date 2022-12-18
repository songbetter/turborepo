import { useState } from 'react'

interface Props {
  initialValue?: number
}

export const Counter = ({ initialValue = 0 }: Props) => {
  const [count, setCount] = useState(initialValue)

  function increase() {
    if (count >= 10) return
    setCount(count + 1)
  }

  function decrease() {
    if (count <= 0) return
    setCount(count - 1)
  }

  function reset() {
    setCount(0)
  }

  return (
    <div>
      <div>
        <button onClick={decrease}>-</button>
        <span id="counter_value">{count}</span>
        <button onClick={increase}>+</button>
      </div>
      <button onClick={reset}>reset</button>
    </div>
  )
}
