import React, { useState, useEffect } from 'react'
import SadPeople from './SadPeople'

import './style.scss'

const Table = () => {
  const [Peoples, setPeoples] = useState([])

  useEffect(() => {
    setPeoples([
      {
        name: 'Caique Zanoveli',
        occurrences: 2,
        friend: 'Nunca'
      },
      {
        name: 'Carlos Eduardo',
        occurrences: 2,
        friend: 'Talvez'
      },
      {
        name: 'Ana Cavallini',
        occurrences: 2,
        friend: 'Não',
        analyze: true
      },
      {
        name: 'Guilherme Vieira',
        occurrences: 2,
        friend: 'Não'
      },
      {
        name: 'Nader Haddi',
        occurrences: 1,
        friend: 'Talvez'
      },
      {
        name: 'Bruno pioltini',
        occurrences: 1,
        friend: 'Talvez'
      }
    ])
  }, [Peoples])

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
          {Peoples.length !== 0 && Peoples.map((people, index) => (
            <SadPeople
              key={index}
              name={people.name}
              occurrences={people.occurrences}
              friend={people.friend}
              analyze={people.analyze || false}
            />
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Table
