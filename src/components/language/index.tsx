import React from 'react'

import Select from '../select'

const Language = () => (
  <Select
    items={['C++', 'HTML']}
    label='Language'
    title='Select a language'
    filterPlaceholder='Filter languages'
    filterLabel='Type or choose a language'
  />
)

export default Language
