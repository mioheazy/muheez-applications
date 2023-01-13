import React, { useState } from 'react'
import { BsCardChecklist, BsTools, BsEyeglasses } from 'react-icons/bs'
import { FaCertificate, FaGraduationCap } from 'react-icons/fa'

interface headerProps {
  changeSection: (event: React.MouseEvent<HTMLDivElement>) => void
}

export default function HomeHeader (props: headerProps): JSX.Element {
  const [active, setActive] = useState('Objective')
  // function dynamicRender (iconName: string): Promise<JSX.Element> {
  //   let [library, icon] = iconName.split('/')
  //   return import(`${library}`)
  //     .then(({default: icon}) => {
  //       return <icon />
  //     })
  // }
  return (
    <nav id="homeHeader">
      <div
        className={active === 'Objective' ? 'homeHeaderIcons active' : 'homeHeaderIcons'}
        data-section="Objective"
        onClick={(event) => { props.changeSection(event); setActive('Objective') }}
      >
        <BsCardChecklist className="hHIcon"/>
        <p className="hHText">Objective</p>
      </div>
      <div
        className={active === 'Skills' ? 'homeHeaderIcons active' : 'homeHeaderIcons'}
        data-section="Skills"
        onClick={(event) => { props.changeSection(event); setActive('Skills') }}
      >
        <BsTools className="hHIcon"/>
        <p className="hHText">Skills</p>
      </div>
      <div
        className={active === 'Experience' ? 'homeHeaderIcons active' : 'homeHeaderIcons'}
        data-section="Experience"
        onClick={(event) => { props.changeSection(event); setActive('Experience') }}
      >
        <BsEyeglasses className="hHIcon"/>
        <p className="hHText">Experience</p>
      </div>
      <div
        className={active === 'Education' ? 'homeHeaderIcons active' : 'homeHeaderIcons'}
        data-section="Education"
        onClick={(event) => { props.changeSection(event); setActive('Education') }}
      >
        <FaGraduationCap className="hHIcon" />
        <p className="hHText">Education</p>
      </div>
      <div
        className={active === 'Certifications' ? 'homeHeaderIcons active' : 'homeHeaderIcons'}
        data-section="Certifications"
        onClick={(event) => { props.changeSection(event); setActive('Certifications') }}
      >
        <FaCertificate className="hHIcon" />
        <p className="hHText">Certifications</p>
      </div>
    </nav>
  )
}

function HeaderPlaceHolder (): JSX.Element {
  return (
    <div id="homeHeader">
      <div className="homeHeaderIcons" data-section="Objective">
        <p className="hHText">Objective</p>
      </div>
      <div className="homeHeaderIcons" data-section="Skills">
        <p className="hHText">Skills</p>
      </div>
      <div className="homeHeaderIcons" data-section="Experience">
        <p className="hHText">Experience</p>
      </div>
      <div className="homeHeaderIcons" data-section="Education">
        <p className="hHText">Education</p>
      </div>
      <div className="homeHeaderIcons" data-section="Certifications">
        <p className="hHText">Certifications</p>
      </div>
    </div>
  )
}

export { HeaderPlaceHolder }
