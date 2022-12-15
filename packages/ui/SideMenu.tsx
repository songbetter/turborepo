import { useState } from 'react'
import { Switch } from './Switch'

interface Props {
  on?: boolean
  currentMenu?: 'DASHBOARD' | 'PRINT' | 'MYPAGE'
  name?: string
  authority?: string
  isOn?: boolean
  workingTime?: string
  completeScore?: number
  deniedScore?: number
  totalTask?: number
}

export const SideMenu = ({
  currentMenu = 'DASHBOARD',
  name = 'Tommy',
  authority = 'admin',
  isOn = true,
  workingTime = '21:00 ~ 9:00',
  completeScore = 8,
  deniedScore = 10,
  totalTask = 15,
  on = true,
}: Props) => {
  const [isOnSideMenu, setIsOnSideMenu] = useState(on)
  return isOnSideMenu ? (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        padding: '2rem 1.875rem 0',
        boxShadow: '6px 0px 24px -5px rgba(130, 130, 130, 0.08)',
        height: '100vh',
        width: '16rem',
      }}
    >
      <div
        style={{ fontSize: '3rem', textAlign: 'end' }}
        onClick={() => setIsOnSideMenu(false)}
      >
        {'<'}
      </div>
      <div style={{ padding: '1.3125rem 0' }}>
        <div
          style={{
            background: isOn ? '#FF7373' : '#FFF',
            border: '0.05rem solid #FF7373',
            width: '0.5rem',
            height: '0.5rem',
            borderRadius: '50%',
          }}
        />
        <div style={{ marginLeft: '1rem', marginBottom: '1.25rem' }}>
          <span style={{ position: 'relative', fontSize: '1.5rem' }}>
            {name}
          </span>
          <span
            style={{
              marginLeft: '0.5rem',
              fontSize: '0.875rem',
              color: '#828282',
            }}
          >
            {authority}
          </span>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              marginRight: '1.25rem',
              alignItems: 'center',
            }}
          >
            <div style={{ fontSize: '1.125rem' }}>working time</div>
            <div style={{ color: '#909090', fontSize: '0.875rem' }}>
              {workingTime}
            </div>
          </div>
          <Switch on={isOn} />
        </div>
      </div>
      <div style={{ padding: '1.25rem 0' }}>
        <span
          style={{
            fontSize: '1.25rem',
            fontWeight: 500,
          }}
        >
          My Task
        </span>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            padding: '0.5625rem 0',
          }}
        >
          <div>
            <span style={{ fontSize: '2rem' }}>
              {completeScore.toString().padStart(2, '0')}
              <span style={{ fontSize: '1rem', color: '#BDBDBD' }}>
                /{totalTask}
              </span>
            </span>
          </div>
          <div style={{ color: '#888', fontSize: '1.125rem' }}>Complete</div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            padding: '0.5625rem 0',
          }}
        >
          <div>
            <span style={{ fontSize: '2rem', color: '#FF7373' }}>
              {deniedScore.toString().padStart(2, '0')}
              <span style={{ fontSize: '1rem', color: '#BDBDBD' }}>
                /{totalTask}
              </span>
            </span>
          </div>
          <div style={{ color: '#888', fontSize: '1.125rem' }}>Denied</div>
        </div>
      </div>
      <nav>
        <ul
          style={{
            listStyleType: 'none',
            marginBlockStart: 0,
            paddingInlineStart: 0,
            fontSize: '1.5rem',
          }}
        >
          {MENUS.map((menu) => (
            <li
              style={{
                margin: '3.125rem 0',
                borderRight:
                  menu === currentMenu ? '0.375rem solid #FF7373' : '#828282',
                color: menu === currentMenu ? '#FF7373' : '#828282',
                padding: '0.375rem 0',
              }}
            >
              {menu}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  ) : (
    <div
      style={{
        fontSize: '3rem',
        padding: '2rem 0 0 1.875rem',
      }}
      onClick={() => setIsOnSideMenu(true)}
    >
      {'>'}
    </div>
  )
}

const MENUS = ['DASHBOARD', 'PRINT', 'MYPAGE']
