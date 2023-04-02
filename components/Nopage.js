import React from 'react'
import Footer from './Footer'
import Header from './Header'

function Nopage({text}) {
  return (
    <div>
    {/* Header */}
    <Header />
    <span className='flex justify-center'>{text}</span>
    <Footer />
    </div>
  )
}

export default Nopage