import React from 'react'
import { BsCardChecklist, BsTools, BsEyeglasses } from 'react-icons/bs'
import { FaCertificate, FaGraduationCap } from 'react-icons/fa'

export default function HomeHeader (): JSX.Element {
  return (
    <div>
      <div><BsCardChecklist /></div>
      <div><BsTools /></div>
      <div><BsEyeglasses /></div>
      <div><FaCertificate /></div>
      <div><FaGraduationCap /></div>
    </div>
  )
}
