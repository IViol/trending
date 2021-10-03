import React from 'react'
import { useLocation } from 'react-router-dom'

const Header = () => {
  const current = useLocation().pathname.replace('/', '')

  const text = current === 'repositories'
    ? 'See what the GitHub community is most excited about today.'
    : 'These are the developers building the hot tools today.'

  return (
    <div className='color-bg-secondary border-bottom'>
      <div className='container-lg p-responsive text-center py-6'>
        <h1 className='h1'>Trending</h1>
        <p className='f4 color-text-secondary col-6 mx-auto'>{text}</p>
      </div>
    </div>
  )
}

export default Header
