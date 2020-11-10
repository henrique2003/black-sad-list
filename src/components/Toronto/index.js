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
            link="/caiquezanoveli"
          />
          <Card
            person="Nader Addad"
            link="/naderaddad"
          />
          <Card
            person="Carlos Eduardo"
            link="/carloseduardo"
          />
          <Card
            person="Guilherme Vieira"
            link="/guilhermevieira"
          />
        </div>
      </div>
    </div>
  )
}

export default Toronto
