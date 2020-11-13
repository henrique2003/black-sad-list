import React from 'react'

const SadPeople = ({ name, occurrences, friend, analyze }) => {
  return (
    <tr className="sad_people">
      {analyze ? (
        <>
          <td><s>{name}</s></td>
          <td className="analize">Em análise</td>
          <td className="analize">Em análise</td>
        </>
      ) : (
        <>
          <td>{name}</td>
          <td>{occurrences}</td>
          <td className={`${friend.toLowerCase() === 'nunca' && 'never'} ${friend.toLowerCase() === 'talvez' && 'perhaps'} ${friend.toLowerCase() === 'não' && 'no'}`}>{friend}</td>
        </>
      )}
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
