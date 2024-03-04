import { ChildAsFC } from "./Child";

const Parent = () => {
  return (
    <ChildAsFC color="red" onClick={() => console.log("Click")}>
      Hello
    </ChildAsFC>
  );
};

export default Parent;
