'use client'

import React from 'react'
import NavbarExample from '@/components/navbar'
import BackgroundVideo from '@/components/backgroundVideo'

const  IndexPage = () => {
  return (
    <div className='h-screen  bg-slate-800 sm:bg-slate-900'>
      <NavbarExample />
      <BackgroundVideo/>
    </div>
  )
}

export default  IndexPage
