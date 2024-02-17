import React from 'react'
import "./sidebar.css"
import Bullet from '../UI/Bullet/bullet'

const SideBar = () => {
  return (
    <div className='sidebar'>
      <div className="timeline">
        <Bullet position="60px"/>
        <Bullet position="120px"/>
        <Bullet position="180px"/>
        <Bullet position="240px"/>
      </div>
    </div>
  )
}

export default SideBar
