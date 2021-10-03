import React from 'react'

type SelectProps = {
  items: string[]
  label: string
  title: string
  filterLabel: string
  filterPlaceholder: string
}

const Select = ({ items, label, title, filterLabel, filterPlaceholder }: SelectProps) => {
  const [isOpen, setIsOpen] = React.useState(false)
  const [current, setCurrent] = React.useState('')
  const toggle = React.useCallback(() => setIsOpen(!isOpen), [isOpen])

  return (
    <div className='mb-3 mb-sm-0'>
      <div className='details details-reset details-overlay select-menu select-menu-modal-right hx_rsm'>
        <button onClick={toggle} type='button' className='summary select-menu-button btn-link'>
          {`${label}:`}
          <span className='text-bold'>&nbsp;{current || 'Any'}&nbsp;</span>
        </button>
        {isOpen && (
          <div className='details-menu select-menu-modal position-absolute right-0' style={{zIndex: 99}}>
            <div className='select-menu-header'>
              <span className='select-menu-title'>
                {title}
              </span>
            </div>
            <div className='select-menu-filters'>
              <div className='select-menu-text-filter'>
                <input
                  aria-label={filterLabel}
                  placeholder={filterPlaceholder}
                  type='text'
                  className='form-control'
                  autoFocus
                />
              </div>
            </div>
            <div className='select-menu-list'>
              {items.map(item => (
                <div key={item} onClick={() => setCurrent(item)}>
                  <a href='/trending/c++?since=daily' className='select-menu-item'>
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
                    <span className='select-menu-item-text'>{item}</span>
                  </a>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Select
