import React from 'react'
import "./ProjectInfo.css"
import BackArrow from "../../assets/BackArrow.png"

export default function ProjectInfo({close,object}) {
  return (
    <div className='projectInfo'>
        <div className='backButton'>
            <img onClick={close} src={BackArrow} alt="asds" />
        </div>
        <div><img src={object.image} alt="" /></div>
    </div>
  )
}
