import React from 'react'

import { Tabs, Language, DateRange, SpokenLanguage } from '..'

const Settings = () => (
  <div className='Box-header d-flex flex-items-center flex-justify-between'>
    <Tabs />
    <div className='d-flex flex-items-center flex-justify-end mt-0 table-list-header-toggle ml-2'>
      <Language />
      <SpokenLanguage />
      <DateRange />
    </div>
  </div>
)

export default Settings
