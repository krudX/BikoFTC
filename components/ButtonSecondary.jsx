import Link from 'next/link'
import React from 'react'

const ButtonSecondary = ({value}) => {
  return (
    <Link href={"/"} className='inline-block h-max w-max bg-bg-light-gray rounded-full font-medium text-base md:text-xl text-text-black py-3 px-6 md:py-5 md:px-10'>{value}</Link>
  )
}

export default ButtonSecondary