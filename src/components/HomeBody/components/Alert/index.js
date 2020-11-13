import React from 'react'
import { GoAlert } from 'react-icons/go'

import './style.scss'

const Alert = () => {
  return (
    <div className="alert">
      <GoAlert color="rgba(255,255,255,0.8)"/>
      <div className="text">
        <h5>Alerta!</h5>
        <p className="alert_message">As informações redigidas a baixo tem o intuíto único de informar fortes opiniões sobre fatos reais para o aprendizado e crescimento de cada um que está lendo o conteúdo a seguir. Estas informações não tem o objetivo de desmoralisar ou difamar ninguém.</p>
      </div>
    </div>
  )
}

export default Alert
