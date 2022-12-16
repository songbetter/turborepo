export const Calculator = () => {
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
          fontSize: '5rem',
          margin: 'auto 0',
          textAlign: 'end',
        }}
      >
        0
      </div>
      {CALCULATOR.map((data, idx) => (
        <button
          key={data}
          style={{
            gridColumn:
              idx === 0 || idx === CALCULATOR.length - 1 ? 'span 2' : '',
            fontSize: '2rem',
          }}
        >
          {data}
        </button>
      ))}
    </div>
  )
}

const CALCULATOR = [
  'AC',
  'DEL',
  '%',
  1,
  2,
  3,
  'X',
  '4',
  '5',
  '6',
  '+',
  '7',
  '8',
  '9',
  '-',
  '.',
  '0',
  '=',
]
