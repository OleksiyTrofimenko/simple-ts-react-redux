import { FC, useState } from "react";

const GuestList: FC = () => {
  const [name, setName] = useState("");
  const [guests, setGuests] = useState<string[]>([]);

  const onAddGuest = () => {
    setName("");
    setGuests((s) => [...s, name]);
  };

  return (
    <div>
      <h3>Guest List</h3>
      <ul>
        {guests.map((guest, index) => (
          <li key={`${index + 1}+guest-item`}>{guest}</li>
        ))}
      </ul>
      <input value={name} onChange={(e) => setName(e.target.value)} />{" "}
      <button onClick={onAddGuest}>Add Guest</button>
    </div>
  );
};

export default GuestList;
