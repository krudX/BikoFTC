import React from 'react'

const SectionContainer = ({children}) => {
  return (
    <div className="section-container grid items-end px-5 py-20 md:px-16 md:py-[150px]">{children}</div>
  )
}

export default SectionContainer