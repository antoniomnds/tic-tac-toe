import { useState } from "react";
import "./Player.css";

export default function Player({initialName, symbol, isActive, onChangeName}) {
  const [name, setName] = useState(initialName);
  const [isEditing, setIsEditing] = useState(false);

  // State updates are not instantaneous but scheduled by React.
  // Passing a function to setState guarantees the atomicity of the operation.
  // The variable 'editing' is populated by React with the last state.
  function handleEditClick() {
    setIsEditing(editing => !editing);
    if (isEditing) { // the button was clicked to stop editing
      onChangeName(symbol, name);
    }
  }

  const handleChange = event => setName(event.target.value);

  let playerName = <span className="player-name">{name}</span>;
  let btnCaption = 'Edit';

  if (isEditing) {
    playerName = <input type="text" value={name} onChange={handleChange} required/>;
    btnCaption = 'Save';
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {playerName}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={handleEditClick}>
        {btnCaption}
      </button>
    </li>
  );
}
