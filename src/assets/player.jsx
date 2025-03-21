import { useState } from "react";
export default function Player({ name, symbol }) {
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
      <ol id="players">
        <li>
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
