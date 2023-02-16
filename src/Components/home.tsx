import React, { useState, useEffect, Suspense } from 'react'
import { useSelector } from  'react-redux'
import TextBox from './includeComponents/TextBox'
import { HeaderPlaceHolder } from './includeComponents/homeHeader'
import text from '../assets/text.json'

const HomeHeader = React.lazy(async () => await import('./includeComponents/homeHeader'))

interface state {
  homeHeader: {
    section: string
  }
}

export default function Home (): JSX.Element {
  const homeHeader = useSelector((state: state) => state.homeHeader)
  const section = homeHeader.section
  const [textBoxText, updatetextBoxText] = useState<any>(text.objective)

  function getSectionText (section: string): void {
    let tbText
    switch (section) {
      case 'Certifications':
        tbText = text.certifications
        break
      case 'Objective':
        tbText = text.objective
        break
      case 'Education':
        tbText = text.education
        break
      case 'Experience':
        tbText = text.experience
        break
      case 'Skills':
        tbText = text.skills
        break
    }
    updatetextBoxText(tbText)
  }
  
  useEffect(() => {
    getSectionText(section)
  }, [section])

  return (
    <div>
      <Suspense fallback={<HeaderPlaceHolder />}>
        <HomeHeader />
      </Suspense>
      <div className="container">
        <TextBox
          {...textBoxText}
        />
      </div>
    </div>
  )
}
