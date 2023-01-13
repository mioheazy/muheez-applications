import React, { useState, useRef, useEffect } from 'react'
// import { Buffer } from 'buffer'
import { CSSTransition } from 'react-transition-group'
import uuid from 'react-uuid'

interface txtObbj {
  [text: string]: any
}

export default function TextBox (props: txtObbj): JSX.Element {
  // let bufferText = ''
  // for (const property in props) {
  //   bufferText += props[property]
  //   bufferText = bufferText.replaceAll(/\s/g, '')
  // }
  // const textBuffer = Buffer.from(bufferText)
  // const [displayText, updateDisplayText] = useState<string>(textBuffer.join(''))
  const [displayText, updateDisplayText] = useState<any>('')
  const [displayType, updateDisplayType] = useState<string>('')
  const [textStatus, updateTextStatus] = useState<boolean>(false)
  // const [textType, updateTextType] = useState<string>('buffer')
  const [sectionTitle, updatesectionTitle] = useState<string>('')
  const textDispLayRef = useRef(null)

  useEffect(() => {
    updatesectionTitle(props.title)
    updateDisplayText(props.data)
    updateDisplayType(props.type)
  })

  useEffect(() => {
    updateTextStatus(false)
    setTimeout(() => {
      updateTextStatus(true)
    }, 200)
  }, [displayText])

  // function toggleDisplayedText () {
  // if (textType === 'buffer') {
  //   updateTextStatus(false)
  //   updateDisplayText(props.data)
  //   updateTextType('nonBuffer')
  // setTimeout(() => {
  //   updateTextStatus(false)
  // }, 300)
  // }
  // }

  function formatText (data: any = ''): JSX.Element {
    let elm
    const textToFormat = data !== '' ? data : displayText
    if (Array.isArray(textToFormat)) {
      let layerCheck = true
      const strCheck = textToFormat.every((eachDt) => {
        if (!Array.isArray(eachDt)) {
          layerCheck = false
        }
        return typeof eachDt === 'string'
      })

      if (strCheck) {
        if (displayType === 'text') {
          elm = textToFormat.map((txt, i) => {
            return (
              <p key={uuid()}>{txt}</p>
            )
          })
        } else if (displayType === 'list') {
          return (
            <ul>
              {textToFormat.map((list: string) => {
                return <li key={uuid()} className="listItem">{list}</li>
              })}
            </ul>
          )
        }
      } else if (layerCheck) {
        // let incursiveData: any = data ? data : displayText
        return (
          <div>
            {textToFormat.map((eachDt: any) => {
              return formatText(eachDt)
            })}
          </div>
        )
      } else {
        return (
          <div key={uuid()}>
            <h3 className="listHead">{textToFormat[0]}</h3>
            <h2 className="subListHead">{textToFormat[1]}</h2>
            <ul>
              {textToFormat[2].map((dataList: string, i: number) => {
                return (
                  <li key={uuid()} className="listItem">{dataList}</li>
                )
              })}
            </ul>
          </div>
        )
      }
    } else if (typeof textToFormat === 'object' && !Array.isArray(textToFormat)) {
      const elmArray: JSX.Element[] = []
      for (const index in textToFormat) {
        const indexElm = <div key={uuid()}>
          <h3>{index}</h3>
          <div>
            {textToFormat[index].map((tile: string, i: number) => {
              return <span key={uuid()} className="skillTile">{tile}</span>
            })}
          </div>
        </div>

        elmArray.push(indexElm)
      }
      return (
        <div>
          {elmArray.map(elem => {
            return elem
          })}
        </div>
      )
    }
    return (<div>{elm}</div>)
  }

  // formatText(props.data, props.type)

  return (
    <div className="container">
      <div>
        <h1 className="glitch" data-text={sectionTitle}>{sectionTitle}</h1>
        <h1 className="glow">{sectionTitle}</h1>
        <div className="scanlines"></div>
      </div>
      <CSSTransition
        key="text1"
        classNames="textDisplay"
        timeout={300}
        in={textStatus}
        appear={true}
        unmountOnExit
        nodeRef={textDispLayRef}
        // onEntered={toggleDisplayedText}
      >
        <div ref={textDispLayRef}>
          {formatText()}
        </div>
      </CSSTransition>
    </div>
  )
}
