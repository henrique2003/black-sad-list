import React from 'react'
import { Link } from 'gatsby'

import './style.scss'

const Card = ({ person, link }) => {
  return (
    <Link to={`/toronto/${link}`} className="card">
      <p>{person}</p>
    </Link>
  )
}

export default Card
