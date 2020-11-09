import React from 'react'

const SadPeople = ({ name, occurrences, friend, ifFriend }) => {
  return (
    <tr className="sad_people">
      <td>{name}</td>
      <td>{occurrences}</td>
      <td className={`${ifFriend === 0 && 'never'} ${ifFriend === 1 && 'perhaps'} ${ifFriend === 2 && 'no'}`}>{friend}</td>
    </tr>
  )
}

SadPeople.defaultProps = {
  name: 'Nome filtrado',
  occurrences: 'indefinido',
  friend: 'Não',
  ifFriend: ''
}

export default SadPeople
