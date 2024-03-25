import React, { useEffect } from "react";
import { IOperation } from "../../Pages/ScheduleEditorPage/ScheduleEditorPage";
import ProjectSidebarCard from "../ProjectSidebarCard/ProjectSidebarCard";
import { AiOutlineSetting } from "react-icons/ai";
import "./OperationsSidebar.scss";
import Draggable, { DraggableData, DraggableEvent, DraggableEventHandler } from "react-draggable";

interface IOperationsSidebarProps {
  operations: IOperation[];
  placeNode: (rightXOffset: number, topYOffset: number, nodeType: IOperation) => void;
}

const OperationsSidebar = ({ operations, placeNode }: IOperationsSidebarProps) => {
  return (
    <div>
      {operations.map((operation) => (
        <OperationsSidebarDraggableCard
          key={operation.id}
          operation={operation}
          placeNode={placeNode}
        />
      ))}
    </div>
  );
};

interface IOperationsSidebarDraggableCardProps {
  operation: IOperation;
  placeNode: (rightXOffset: number, topYOffset: number, nodeType: IOperation) => void;
}

const OperationsSidebarDraggableCard = ({
  operation,
  placeNode,
}: IOperationsSidebarDraggableCardProps) => {
  //Fix issue with React.StrictMode and ReactDOM.findDOMNode by using useRef
  //https://stackoverflow.com/questions/63603902/finddomnode-is-deprecated-in-strictmode-finddomnode-was-passed-an-instance-of-d
  const nodeRef = React.useRef(null);
  const cardContainerRef = React.useRef<HTMLDivElement>(null);
  const [globalInitialCardPos, setGlobalInitialCardPos] = React.useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = React.useState(false);
  const [position, setPosition] = React.useState({ x: 0, y: 0 });

  const handleDragStopped = (e: DraggableEvent, data: DraggableData) => {
    setIsDragging(false);
    //Reset the position of the card
    setPosition({ x: 0, y: 0 });

    //Place the node in the flow editor
    placeNode(data.x + globalInitialCardPos.x, globalInitialCardPos.y + data.y, operation);
  };

  //Calculate the starting position of the card
  const calculateStartingPosition = () => {
    if (cardContainerRef.current) {
      const cardRect = cardContainerRef.current.getBoundingClientRect();
      setGlobalInitialCardPos({
        x: cardRect.left,
        y: cardRect.top,
      });
    }
  };

  //Calculate the starting position of the card
  useEffect(() => {
    calculateStartingPosition();
  }, [cardContainerRef]);

  //Update the starting position of the card on window resize
  useEffect(() => {
    window.addEventListener("resize", calculateStartingPosition);
    return () => window.removeEventListener("resize", calculateStartingPosition);
  }, []);

  return (
    <div
      style={{
        position: "relative",
      }}
      ref={cardContainerRef}
    >
      <Draggable
        onStop={(e, data) => {
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
