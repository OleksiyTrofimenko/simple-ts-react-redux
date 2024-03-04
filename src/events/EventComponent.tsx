import { ChangeEvent, DragEvent, FC } from "react";

const EventComponent: FC = () => {
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    console.log("I am being changed!", e);
  };

  const onDragStart = (e: DragEvent<HTMLDivElement>) => {
    console.log("I am being dragged!", e);
  };

  return (
    <div>
      <input type="text" onChange={onChange} />
      <div draggable onDragStart={onDragStart}>
        Drag me!
      </div>
    </div>
  );
};

export default EventComponent;
