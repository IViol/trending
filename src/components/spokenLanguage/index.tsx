import React from 'react'

import Select from '../select'

const SpokenLanguage = () => (
  <Select
    items={['Abkhazian', 'Afar']}
    label='Spoken Language'
    title='Select a spoken language'
    filterPlaceholder='Filter spoken languages'
    filterLabel='Type or choose a spoken language'
  />
)

export default SpokenLanguage
