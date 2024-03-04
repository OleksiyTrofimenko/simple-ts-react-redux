import { FC, useState, useRef, useEffect } from "react";

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
  const inputRef = useRef<HTMLInputElement | null>(null);

  const [name, setName] = useState("");
  const [user, setUser] = useState<
    | {
        name: string;
        age: number;
      }
    | undefined
  >(undefined);

  useEffect(() => {
    inputRef?.current?.focus();
  }, []);

  const onSearch = () => {
    const user = userList.find((user) => {
      return user.name === name;
    });

    setUser(user);
  };

  return (
    <div>
      UserSearch{" "}
      <input ref={inputRef} value={name} onChange={(e) => setName(e.target.value)} />{" "}
      <button onClick={onSearch}>Find User</button>
      <div>{user && `${user.name} ${user.age}`}</div>
    </div>
  );
};

export default UserSearch;
