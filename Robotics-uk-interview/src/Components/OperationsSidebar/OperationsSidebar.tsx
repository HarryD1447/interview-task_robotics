import React from "react";
import { IOperation } from "../../Pages/ScheduleEditorPage/ScheduleEditorPage";
import ProjectSidebarCard from "../ProjectSidebarCard/ProjectSidebarCard";
import { AiOutlineSetting } from "react-icons/ai";
import "./OperationsSidebar.scss";
import Draggable, { DraggableEventHandler } from "react-draggable";

interface IOperationsSidebarProps {
  operations: IOperation[];
}

const OperationsSidebar = ({ operations }: IOperationsSidebarProps) => {
  const onDragStop: DraggableEventHandler = (e, data) => {
    console.log("Drag Stopped", data);
  };

  return (
    <div>
      {operations.map((operation) => (
        <OperationsSidebarDraggableCard
          key={operation.id}
          operation={operation}
          onDragStop={onDragStop}
        />
      ))}
    </div>
  );
};

interface IOperationsSidebarDraggableCardProps {
  operation: IOperation;
  onDragStop: DraggableEventHandler;
}

const OperationsSidebarDraggableCard = ({
  operation,
  onDragStop,
}: IOperationsSidebarDraggableCardProps) => {
  //Fix issue with React.StrictMode and ReactDOM.findDOMNode by using useRef
  //https://stackoverflow.com/questions/63603902/finddomnode-is-deprecated-in-strictmode-finddomnode-was-passed-an-instance-of-d
  const nodeRef = React.useRef(null);
  const [isDragging, setIsDragging] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleDragStopped = (e: any, data: any) => {
    setIsDragging(false);
    //Reset the position of the card
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <Draggable
        onStop={(e, data) => {
          onDragStop(e, data);
          handleDragStopped(e, data);
        }}
        onStart={() => setIsDragging(true)}
        onDrag={(e, data) => setPosition({ x: data.x, y: data.y })}
        position={position}
        nodeRef={nodeRef}
      >
        <div
          ref={nodeRef}
          style={{
            position: "absolute",
            zIndex: isDragging ? 100 : 0,
            left: 0,
            top: 0,
            width: "100%",
          }}
        >
          <ProjectSidebarCard
            onClick={() => console.log("Operation Clicked")}
            details={operation}
            rightIcon={<AiOutlineSetting className="operations-card__settings-icon" />}
            tooltip="Settings"
            fontSize={26}
            showDraggingShadow={isDragging}
          />
        </div>
      </Draggable>
      <ProjectSidebarCard
        onClick={() => console.log("Operation Clicked")}
        details={operation}
        rightIcon={<AiOutlineSetting className="operations-card__settings-icon" />}
        tooltip="Settings"
        fontSize={26}
      />
    </div>
  );
};

export default OperationsSidebar;
