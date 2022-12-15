interface Props {
  logged?: boolean
}
export const Header = ({ logged = false }: Props) => {
  return (
    <div
      style={{
        background: '#404040',
        color: '#FFFFFF',
        padding: '0 1.875rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <div style={{ marginRight: '0.5625rem' }}>logo</div>
          <div
            style={{
              marginLeft: '0.4375rem',
              padding: '0.5625rem 2rem',
              background: '#fcfcfc',
              borderRadius: '64px',
            }}
          >
            <input
              type="text"
              placeholder="Search for Customer"
              style={{ border: 'none', outline: 'none' }}
            />
          </div>
        </div>
        <div style={{ padding: '1.5rem 1.8125rem' }}>
          {logged ? 'log out' : 'log in'}
        </div>
      </div>
    </div>
  )
}
