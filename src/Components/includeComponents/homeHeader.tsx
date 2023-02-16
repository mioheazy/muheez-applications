import React, { useState } from 'react'
import { BsCardChecklist, BsTools, BsEyeglasses } from 'react-icons/bs'
import { FaCertificate, FaGraduationCap } from 'react-icons/fa'
import { useSelector, useDispatch } from 'react-redux'

interface headerProps {
  changeSection: (event: React.MouseEvent<HTMLDivElement>) => void
}

interface state {
  homeHeader: {
    section: string
  }
}

export default function HomeHeader (): JSX.Element {
  // const [active, setActive] = useState('Objective')
  // function dynamicRender (iconName: string): Promise<JSX.Element> {
  //   let [library, icon] = iconName.split('/')
  //   return import(`${library}`)
  //     .then(({default: icon}) => {
  //       return <icon />
  //     })
  // }
  const dispatch = useDispatch()

  const changeSection = (event: React.MouseEvent<HTMLDivElement>) => {
    let newSection = (event.currentTarget as HTMLElement).dataset.section ?? ''
    dispatch({ type: 'section', payload: newSection })
  }

  const homeHeader = useSelector((state: state) => state.homeHeader)
  const active = homeHeader.section

  // console.log(active)
  return (
    <nav id="homeHeader">
      <div
        className={active === 'Objective' ? 'homeHeaderIcons active' : 'homeHeaderIcons'}
        data-section="Objective"
        onClick={changeSection}
      >
        <BsCardChecklist className="hHIcon"/>
        <p className="hHText">Objective</p>
      </div>
      <div
        className={active === 'Skills' ? 'homeHeaderIcons active' : 'homeHeaderIcons'}
        data-section="Skills"
        onClick={changeSection}
      >
        <BsTools className="hHIcon"/>
        <p className="hHText">Skills</p>
      </div>
      <div
        className={active === 'Experience' ? 'homeHeaderIcons active' : 'homeHeaderIcons'}
        data-section="Experience"
        onClick={changeSection}
      >
        <BsEyeglasses className="hHIcon"/>
        <p className="hHText">Experience</p>
      </div>
      <div
        className={active === 'Education' ? 'homeHeaderIcons active' : 'homeHeaderIcons'}
        data-section="Education"
        onClick={changeSection}
      >
        <FaGraduationCap className="hHIcon" />
        <p className="hHText">Education</p>
      </div>
      <div
        className={active === 'Certifications' ? 'homeHeaderIcons active' : 'homeHeaderIcons'}
        data-section="Certifications"
        onClick={changeSection}
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
