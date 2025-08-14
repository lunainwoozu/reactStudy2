import { useState } from "react"

export default function Player({name, symbol}) {
  const [isEditing, setIsEditing] = useState(false);
  
  function handleEditName(){
    setIsEditing(!isEditing);
  }

  let playerName = <span className='player-name'>{name}</span>;

  if (isEditing) {
    playerName = <input type='text' placeholder='name' required />;
  }

  return(
    <li>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditName}>
        {(isEditing ? 'Save' : 'Edit')}
      </button>
    </li>
  )
}