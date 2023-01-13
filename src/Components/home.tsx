import React, { useState, Suspense } from 'react'
import TextBox from './includeComponents/TextBox'
import { HeaderPlaceHolder } from './includeComponents/HomeHeader'
import text from '../assets/text.json'

const HomeHeader = React.lazy(async () => await import('./includeComponents/HomeHeader'))

export default function Home (): JSX.Element {
  const [homeSection, updateHomeSection] = useState<string>('Objective')
  const [textBoxText, updatetextBoxText] = useState<any>(text.objective)

  function getSectionText (section: string): string {
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
    return section
  }

  function changeSection (event: React.MouseEvent<HTMLDivElement>): void {
    const section = (event.currentTarget as HTMLElement).dataset.section ?? ''
    updateHomeSection(getSectionText(section))
  }

  const headerProps = {
    changeSection
  }

  return (
    <div>
      <Suspense fallback={<HeaderPlaceHolder />}>
        <HomeHeader
          {...headerProps}
        />
      </Suspense>
      <div className="container">
        <TextBox
          {...textBoxText}
        />
      </div>
    </div>
  )
}
