import React from 'react'
import classNames from 'classnames'
import { useLocation } from 'react-router-dom'

const TABS = ['repositories', 'developers']

const Tabs = () => {
  const current = useLocation().pathname.replace('/', '')

  return (
    <nav className='subnav mb-0' aria-label='Trending'>
      {TABS.map(tab => (
        <a key={tab} className={classNames('subnav-item', current === tab && 'selected')} href={`/${tab}`}>{tab}</a>
      ))}
    </nav>
  )
}

export default Tabs
