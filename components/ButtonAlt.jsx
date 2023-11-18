import Link from 'next/link'
import React from 'react'

const ButtonAlt = ({value}) => {
  return (
    <Link href={"/"} className='inline-block w-max bg-bg-dark-gray border border-border rounded-full font-medium text-text-light uppercase py-3 px-6 md:py-5 md:px-10'>{value}</Link>
  )
}

export default ButtonAlt