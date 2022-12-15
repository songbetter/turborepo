import { useState } from 'react'

interface Props {
  on?: boolean
}

export const Switch = ({ on = false }: Props) => {
  const [isButtonOn, setIsButtonOn] = useState(on)

  return (
    <div
      style={{
        borderRadius: '1rem',
        background: '#404040',
        width: '4.3125rem',
        height: '1.75rem',
        position: 'relative',
      }}
      onClick={() => setIsButtonOn(!isButtonOn)}
    >
      <div
        style={{
          borderRadius: '50%',
          background: isButtonOn ? '#ff7373' : '#E0E0E0',
          width: '1.75rem',
          height: '1.75rem',
          position: 'absolute',
          transition: 'all 0.3s ease',
          transform: isButtonOn ? 'translateX(2.5rem)' : 'translateX(0)',
        }}
      />
    </div>
  )
}
