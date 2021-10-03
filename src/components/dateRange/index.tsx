import React from 'react'

const DateRange = () => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [current, setCurrent] = React.useState('Today')
  const toggle = React.useCallback(() => setIsOpen(!isOpen), [isOpen])

  return (
    <div>
      <div className='details-reset details-overlay select-menu select-menu-modal-right hx_rsm hx_rsm--auto-height'>
        <button onClick={toggle} type='button' className='button select-menu-button btn-link'>
          Date range:
          <span className='text-bold'>&nbsp;{current}&nbsp;</span>
        </button>
        {isOpen && (
          <div className='select-menu-modal position-absolute right-0'>
            <div className='select-menu-header'>
              <span className='select-menu-title'>
                Adjust time span
              </span>
              <button type='button' className='close-button hx_rsm-close-button btn-link d-none ml-2'>
                <svg
                  aria-hidden='true'
                  height='16'
                  viewBox='0 0 16 16'
                  version='1.1'
                  width='16'
                  className='octicon octicon-x'
                >
                  <path
                    fillRule='evenodd'
                    d='M3.72 3.72a.75.75 0 011.06 0L8 6.94l3.22-3.22a.75.75 0 111.06 1.06L9.06 8l3.22 3.22a.75.75 0 11-1.06 1.06L8 9.06l-3.22 3.22a.75.75 0 01-1.06-1.06L6.94 8 3.72 4.78a.75.75 0 010-1.06z'
                  />
                </svg>
              </button>
            </div>
            <div className='select-menu-list'>
              <a onClick={() => setCurrent('Today')} href='https://github.com/trending?since=daily' className='select-menu-item'>
                <svg
                  aria-hidden='true'
                  height='16'
                  viewBox='0 0 16 16'
                  version='1.1'
                  width='16'
                  className='octicon octicon-check select-menu-item-icon'
                >
                  <path
                    fillRule='evenodd'
                    d='M13.78 4.22a.75.75 0 010 1.06l-7.25 7.25a.75.75 0 01-1.06 0L2.22 9.28a.75.75 0 011.06-1.06L6 10.94l6.72-6.72a.75.75 0 011.06 0z'
                  />
                </svg>
                <span className='select-menu-item-text'>Today</span>
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default DateRange
