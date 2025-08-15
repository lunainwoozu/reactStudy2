import { useState } from "react"

export default function Player({initialName, symbol, isActive, onChangeName}) {
  const [playerName, setPlayerName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);
  
  function handleEditName(){
    setIsEditing(editing => !editing);

    if (isEditing){
      onChangeName(symbol, playerName);
      console.log(symbol, playerName)
    }
  }

  function handleChange(e){
    setPlayerName(e.target.value) // 이벤트가 일어나는 input의 값
  }

  let nameTag = <span className='player-name'>{playerName}</span>;

  if (isEditing) {
    nameTag = <input type='text' placeholder='name'
                value={playerName} onChange={handleChange} required />;
  }

  return(
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {nameTag}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditName}>
        {(isEditing ? 'Save' : 'Edit')}
      </button>
    </li>
  )
}