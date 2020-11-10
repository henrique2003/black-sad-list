import React from 'react'
import Card from './Card'

import '../layout'
import './style.scss'

const Toronto = () => {
  return (
    <div className="toronto">
      <div className="container">
        <div className="row">
          <Card
            person="Caique Zanoveli"
            link="caiquezanoveli"
          />
          <Card
            person="Nader Haddi"
            link="naderhaddi"
          />
          <Card
            person="Carlos Eduardo"
            link="carloseduardo"
          />
          <Card
            person="Guilherme Vieira"
            link="guilhermevieira"
          />
          <Card
            person="Ana Cavaliini"
            link="anacavaliini"
          />
        </div>
      </div>
    </div>
  )
}

export default Toronto
