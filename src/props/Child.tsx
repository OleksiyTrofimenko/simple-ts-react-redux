import { PropsWithChildren } from "react";

interface ChildProps {
  color: string;
  onClick: () => void;
}

// This is a functional component
export const Child = ({ color, onClick }: ChildProps) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};

// No need to use children prop in this case
export const ChildAsFC: React.FC<PropsWithChildren<ChildProps>> = ({
  color,
  onClick,
}) => {
  return (
    <div>
      {color}
      <button onClick={onClick}>Click me!</button>
    </div>
  );
};
