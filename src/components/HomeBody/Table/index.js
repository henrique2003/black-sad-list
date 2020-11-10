import React from 'react'
import SadPeople from './SadPeople'

import './style.scss'

const Table = () => {
  return (
    <div className="list">
      <table>
        <tr>
          <th>Nome</th>
          <th>Ocorrencias</th>
          <th>Amigos ?</th>
        </tr>
        <tbody>
          <div className="space"></div>
          <SadPeople
            name="Caique Zanoveli"
            occurrences="1"
            friend="Nunca"
            ifFriend={0}
          />
          <SadPeople
            name="Carlos Eduardo"
            occurrences="1"
            friend="Talvez"
            ifFriend={1}
          />
          <SadPeople
            name="Ana Cavallini"
            occurrences="2"
            friend="Não"
            ifFriend={1}
          />
          <SadPeople
            name="Guilherme Vieira"
            occurrences="2"
            friend="Não"
            ifFriend={2}
          />
          <SadPeople
            name="Nader Haddi"
            occurrences="2"
            friend="Não"
            ifFriend={2}
          />
        </tbody>
      </table>
    </div>
  )
}

export default Table
