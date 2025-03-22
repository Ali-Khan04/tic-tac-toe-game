import { useState } from "react";
export default function Player({ name, symbol, isActive }) {
  const [editing, setEditing] = useState(false);
  const [initialName, setName] = useState(name);
  function changeName(event) {
    setName(event.target.value);
  }
  function handleEditing() {
    setEditing((editing) => !editing);
  }
  let playerEditing = <span className="player-name">{initialName}</span>;
  let buttonState = "Edit";
  if (editing) {
    playerEditing = (
      <input type="text" required value={initialName} onChange={changeName} />
    );
    buttonState = "Save";
  }
  return (
    <>
      <ol id="players" className="highlight-player">
        <li className={isActive ? "active" : undefined}>
          <span className="player">
            {playerEditing}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditing}>{buttonState}</button>
        </li>
      </ol>
    </>
  );
}
