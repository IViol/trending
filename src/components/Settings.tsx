import React from 'react'
import { useLocation } from 'react-router-dom'

import { Tabs, Language, DateRange, SpokenLanguage } from '.'

const Settings = () => {
  const current = useLocation().pathname.replace('/', '')

  return (
    <div className='Box-header d-flex flex-items-center flex-justify-between'>
      <Tabs />
      <div className='d-flex flex-items-center flex-justify-end mt-0 table-list-header-toggle ml-2'>
        {current === 'repositories' && <SpokenLanguage />}
        <Language />
        <DateRange />
      </div>
    </div>
  )
}

export default Settings
