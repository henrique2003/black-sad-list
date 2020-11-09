import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import Table from './Table'

import '../layout'
import './style.scss'

const HomeBody = () => {
  return (
    <div className="home">
      <div className="container">
        <h4 className="title">{siteMetadata.title}</h4>
        <p className="description">{siteMetadata.description}</p>
        <p className="by">by</p>
        <p className="user">{siteMetadata.by}</p>
        <Table />
      </div>
    </div>
  )
}

export default HomeBody