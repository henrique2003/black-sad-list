import React from 'react'
import { siteMetadata } from '../../../gatsby-config'
import { Reports, Table, Alert } from './components'
import {
  CaiqueZanoveli
  // CarlosEduardo,
  // GuilhermeVieira,
  // NaderHaddi
} from '../../images'

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
        <div className="reports_container">
          <h3 className="report_title">Breves relatos</h3>
          <Alert />
          <Reports
            imageProfile={CaiqueZanoveli}
            name="Caique Zanoveli"
          >
            <p>Caique é definitivamente um cara interesseiro, oportunista e que concerteza não tem nenhum tipo de empatia pelo próximo, fala e faz o que é preciso para conseguir o que quer, principalmente ter reconhecimento e atenção da pessoas a sua volta, mesmo que seja necessário diminuir outras pessoas para isso. Com ele não é preciso medir palavras e ações para alcançar seus interesses próprios, é o típico ser humano que só é bom com outras que ele tem interesse em ter uma "amisade".</p>
            <p>Não é possivel ter uma amisade verdadeira com este tipo de pessoa.</p>
            <p>...</p>
          </Reports>
        </div>
      </div>
    </div>
  )
}

export default HomeBody