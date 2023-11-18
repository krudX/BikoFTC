import Link from 'next/link'
import React from 'react'

const ButtonPrimary = ({value}) => {
  return (
    <Link href={"/"} className='inline-block h-max w-max bg-text-black rounded-full font-medium text-base md:text-xl text-white py-3 px-6 md:py-5 md:px-10'>{value}</Link>
  )
}

export default ButtonPrimary