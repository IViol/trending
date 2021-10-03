import React from 'react'

import { Header, Settings } from '..'

type MainProps = {
  children: React.ReactNode
}

const Main = ({ children }: MainProps) => (
  <main>
    <Header />
    <div className='position-relative container-lg p-responsive pt-6'>
      <div className='Box'>
        <Settings />
        {children}
      </div>
    </div>
  </main>
)

export default Main
