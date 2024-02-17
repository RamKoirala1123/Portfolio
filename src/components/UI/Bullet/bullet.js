import React from 'react'
import "./bullet.css"

const Bullet = ({position}) => {
  return (
    <div>
       <div className="bullet" style={{top: position}}></div>
    </div>
  )
}

export default Bullet
