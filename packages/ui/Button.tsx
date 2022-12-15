interface Props {
  primary?: boolean
  secondary?: boolean
  size?: 'small' | 'large'
  label?: string
}

export const Button = ({
  primary = false,
  secondary = false,
  label = 'Boop',
  size = 'small',
}: Props) => {
  return (
    <button
      style={{
        backgroundColor: primary
          ? '#404040'
          : secondary
          ? '#E0E0E0'
          : '#FF6452',
        fontSize: size === 'large' ? '1.5rem' : '1.125rem',
        borderRadius: '1rem',
        padding: size === 'large' ? '1.1875rem 3rem' : '0.875rem 1.125rem',
        border: 'none',
        color: '#fff',
      }}
    >
      {label}
    </button>
  )
}
