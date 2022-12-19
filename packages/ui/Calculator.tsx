import React, { useState } from 'react'

export const Calculator = () => {
  const [result, setResult] = useState(INITIAL_VALUE)
  const [total, setTotal] = useState(0)

  function reset() {
    setResult(INITIAL_VALUE)
    setTotal(0)
  }

  function calculator() {
    let calculateResult = result.currentValue

    switch (result.operator) {
      case '+': {
        calculateResult += result.temp
        break
      }
      case 'X': {
        calculateResult *= result.temp
        break
      }
      case '-': {
        calculateResult -= result.temp
        break
      }
      case '/': {
        calculateResult /= result.temp
        break
      }
      default: {
        break
      }
    }
    setResult({
      ...result,
      currentValue: calculateResult,
      temp: 0,
      operator: '',
    })
    setTotal(calculateResult)
  }
  function finish() {
    calculator()
  }

  function setOperation(operator: string) {
    if (result.currentValue && result.temp) {
      calculator()
      setTotal(result.currentValue)
    }
    setResult({ ...result, operator })
  }

  function setNumber(value) {
    if (result.operator) {
      const temp = Number(String(result.temp) + value)
      setResult({ ...result, temp })
      setTotal(result.temp)
    } else {
      const currentValue = Number(String(result.currentValue) + value)
      setResult({ ...result, currentValue })
      setTotal(result.currentValue)
    }
  }
  function handleClickBtn(e: React.MouseEvent<HTMLElement>) {
    const { innerText: value } = e.target
    // 숫자라면
    if (/[0-9]/.test(value)) {
      return setNumber(value)
    }

    // 초기화라면
    if (value === 'AC') {
      return reset()
    }

    // 계산 끝
    if (value === '=') {
      return finish()
    }

    // 계산하는 값들이라면
    return setOperation(value)
  }
  return (
    <div
      style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4,100px)',
        gridTemplateRows: 'minmax(140px,auto) repeat(5,100px)',
      }}
    >
      <div
        style={{
          gridColumn: '1/-1',
          margin: 'auto 0',
          textAlign: 'end',
        }}
      >
        <div>
          {result.currentValue}
          {result.operator && result.operator}
          {result.temp !== 0 && result.temp}
        </div>
        <div
          style={{
            fontSize: '5rem',
            overflow: 'auto',
          }}
          id="calculator_result"
        >
          {Math.floor(total)}
        </div>
      </div>
      <button
        style={{ gridColumn: 'span 3', fontSize: '2rem' }}
        onClick={handleClickBtn}
        className="operator"
      >
        AC
      </button>
      <button
        className="operator"
        style={{ fontSize: '2rem' }}
        onClick={handleClickBtn}
      >
        /
      </button>
      <button
        className="digit"
        style={{ fontSize: '2rem' }}
        onClick={handleClickBtn}
      >
        1
      </button>
      <button
        className="digit"
        style={{ fontSize: '2rem' }}
        onClick={handleClickBtn}
      >
        2
      </button>

      <button
        className="digit"
        style={{ fontSize: '2rem' }}
        onClick={handleClickBtn}
      >
        3
      </button>
      <button
        className="operator"
        style={{ fontSize: '2rem' }}
        onClick={handleClickBtn}
      >
        X
      </button>
      <button
        className="digit"
        style={{ fontSize: '2rem' }}
        onClick={handleClickBtn}
      >
        4
      </button>
      <button
        className="digit"
        style={{ fontSize: '2rem' }}
        onClick={handleClickBtn}
      >
        5
      </button>
      <button
        className="digit"
        style={{ fontSize: '2rem' }}
        onClick={handleClickBtn}
      >
        6
      </button>
      <button
        className="operator"
        style={{ fontSize: '2rem' }}
        onClick={handleClickBtn}
      >
        +
      </button>
      <button
        className="digit"
        style={{ fontSize: '2rem' }}
        onClick={handleClickBtn}
      >
        7
      </button>
      <button
        className="digit"
        style={{ fontSize: '2rem' }}
        onClick={handleClickBtn}
      >
        8
      </button>
      <button
        className="digit"
        style={{ fontSize: '2rem' }}
        onClick={handleClickBtn}
      >
        9
      </button>
      <button
        className="operator"
        style={{ fontSize: '2rem' }}
        onClick={handleClickBtn}
      >
        -
      </button>
      <button
        className="digit"
        style={{ gridColumn: 'span 3', fontSize: '2rem' }}
        onClick={handleClickBtn}
      >
        0
      </button>
      <button
        className="operator"
        style={{ fontSize: '2rem' }}
        onClick={handleClickBtn}
      >
        =
      </button>
    </div>
  )
}

const INITIAL_VALUE = {
  currentValue: 0,
  temp: 0,
  operator: '',
}
