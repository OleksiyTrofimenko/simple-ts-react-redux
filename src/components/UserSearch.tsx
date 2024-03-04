import { FC, useState } from "react";

const userList = [
  {
    name: "Sarah",
    age: 20,
  },
  {
    name: "Alex",
    age: 25,
  },
  {
    name: "Michael",
    age: 30,
  },
];

const UserSearch: FC = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState<
    | {
        name: string;
        age: number;
      }
    | undefined
  >(undefined);

  const onSearch = () => {
    const user = userList.find((user) => {
      return user.name === name;
    });

    setUser(user);
  };

  return (
    <div>
      <h1>UserSearch</h1>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={onSearch}>Find User</button>
      <div>{user && `${user.name} ${user.age}`}</div>
    </div>
  );
};

export default UserSearch;
