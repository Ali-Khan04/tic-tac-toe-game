import { useState } from "react";
export default function Player({ name, symbol }) {
  const [editing, setEditing] = useState(false);
  function handleEditing() {
    setEditing(true);
  }
  let playerEditing = <span className="player-name">{name}</span>;
  if (editing) {
    playerEditing = <input type="text" required />;
  }
  return (
    <>
      <ol id="players">
        <li>
          <span className="player">
            {playerEditing}
            <span className="player-symbol">{symbol}</span>
          </span>
          <button onClick={handleEditing}>Edit</button>
        </li>
      </ol>
    </>
  );
}
