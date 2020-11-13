import React from 'react'
import './style.scss'

const Reports = ({ imageProfile, name, children }) => {
  return (
    <div className="reports">
      <header>
        <div
          className="image"
          style={{ backgroundImage: `url(${imageProfile})` }}
        ></div>
        <h6>{name}</h6>
      </header>
        {children}
    </div>
  )
}

export default Reports
