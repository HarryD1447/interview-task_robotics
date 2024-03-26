import React, { useCallback, useEffect, useMemo, useState } from "react";
import "./ScheduleEditorPage.scss";
import "reactflow/dist/style.css";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";
import { AiOutlineMore } from "react-icons/ai";
import TabComponent from "../../Components/TabComponent/TabComponent";
import ScheduleSidebar from "../../Components/ScheduleSidebar/ScheduleSidebar";
import { IconType } from "../../Components/IconRenderer/IconRenderer";
import OperationsSidebar from "../../Components/OperationsSidebar/OperationsSidebar";
import ReactFlow, {
  Background,
  BackgroundVariant,
  Controls,
  MarkerType,
  OnConnect,
  ReactFlowInstance,
  addEdge,
  useEdgesState,
  useNodesState,
  Node,
  Edge,
  Transform,
  useReactFlow,
} from "reactflow";
import BaseCustomFlowCard from "../../Components/_FlowEditor/BaseCustomFlowCard/BaseCustomFlowCard";
import TransferFlowCard from "../../Components/_FlowEditor/TransferFlowCard";
import OperationFlowCard from "../../Components/_FlowEditor/OperationFlowCard";
import StartBeginFlowCard from "../../Components/_FlowEditor/StartBeginFlowCard";
import SleepFlowCard from "../../Components/_FlowEditor/SleepFlowCard";
import EndScheduleFlowCard from "../../Components/_FlowEditor/EndScheduleFlowCard";
import { CustomNodeData } from "../../types/CustomNodeData";
import { NodeSelectContext } from "../../context/NodeSelectContext";
import { animate } from "popmotion";
import FlowSidebar from "../../Components/FlowSidebar/FlowSidebar";

// Define the interfaces for the ScheduleEditorPage
export interface ISidebarOperation {
  id: string;
  name: string;
  backgroundColor: string;
  color: string;
  icon: IconType;
}

export interface ISchedule extends ISidebarOperation {}

export interface IOperation extends ISidebarOperation {}

const DEFAULT_OPERATIONS: IOperation[] = [
  {
    id: "38963f08-c140-4880-aec0-f42780648db5",
    name: "Transfer",
    backgroundColor: "#FBE1F4",
    color: "#FF2E8B",
    icon: IconType.Transfer,
  },
  {
    id: "14d6796d-f29d-47a8-8158-5a1664674054",
    name: "Operation",
    backgroundColor: "#FBECE1",
    color: "#FFAB2E",
    icon: IconType.Operation,
  },
  {
    id: "586136f8-6717-4b04-b9d8-d6ff2168b93d",
    name: "Start / Begin",
    backgroundColor: "#E1FBE2",
    color: "#5FD119",
    icon: IconType.Start,
  },
  {
    id: "22767aa0-2dbf-47e7-ab94-49dc66ba507f",
    name: "Sleep",
    backgroundColor: "#E1E9FB",
    color: "#007BFF",
    icon: IconType.Sleep,
  },
  {
    id: "4b32a09e-0f3c-429b-9b83-c15429e7cf65",
    name: "End Schedule Thread",
    backgroundColor: "#FBE3E1",
    color: "#FF2E00",
    icon: IconType.End,
  },
];

const DEFAULT_SCHEDULES: ISchedule[] = [
  {
    id: "cd089239-af0f-4e4f-a1a4-468b2e48ef13",
    name: "Robot Schedule",
    backgroundColor: "#E1E9FB",
    color: "#007BFF",
    icon: IconType.Rocket,
  },
  {
    id: "9726ca46-d42f-4078-8192-38f7e505ace3",
    name: "Filtering System",
    backgroundColor: "#FBF5E1",
    color: "#FFD600",
    icon: IconType.Filter,
  },
  {
    id: "9726hg46-d42f-4078-8112-38f7e505ace3",
    name: "Arm Control System",
    backgroundColor: "#E1FBE4",
    color: "#37E071",
    icon: IconType.Arm,
  },
];

enum ActiveTab {
  Schedules,
  Operations,
  Layers,
}

const NODE_EDITOR_SIDEBAR_WIDTH = 400;
const NODE_EDITOR_ANIMATION_OFFSET_Y = 100;
const NODE_CARD_WIDTH = 190;

const ScheduleEditorPage = () => {
  const [schedules, setSchedules] = useState<ISchedule[]>(DEFAULT_SCHEDULES);
  const [operations, setOperations] = useState<IOperation[]>(DEFAULT_OPERATIONS);
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Schedules);

  //Reference to the sidebar container holder
  const sidebarContainerRef = React.useRef<HTMLDivElement>(null);

  //Drag and drop flow editor container
  const { setViewport, zoomIn, zoomOut } = useReactFlow();
  const flowEditorContainerRef = React.useRef<HTMLDivElement>(null);
  const [containerDimensions, setContainerDimensions] = React.useState({ width: 0, height: 0 });
  const [containerPosition, setContainerPosition] = React.useState({ x: 0, y: 0 });
  const [reactFlowInstance, setReactFlowInstance] = useState<ReactFlowInstance | null>(null);

  //Node editor sidebar
  const [showingNodeEditorSidebar, setShowingNodeEditorSidebar] = useState<boolean>(false);
  const [selectedNode, setSelectedNode] = useState<CustomNodeData | null>(null);

  const [nodes, setNodes, onNodesChange] = useNodesState([]);
  const [edges, setEdges, onEdgesChange] = useEdgesState([]);

  const nodeTypes = useMemo(
    () => ({
      "type-transfer": TransferFlowCard,
      "type-operation": OperationFlowCard,
      "type-start/begin": StartBeginFlowCard,
      "type-sleep": SleepFlowCard,
      "type-endschedulethread": EndScheduleFlowCard,
    }),
    []
  );

  const onConnect: OnConnect = useCallback(
    (params) => {
      const edge = {
        ...params,
        type: "smoothstep",
        pathOptions: {
          borderRadius: 5,
        },
        markerEnd: {
          type: MarkerType.ArrowClosed,
          width: 18,
          height: 18,
          color: "#B6B6BC",
        },
      };
      setEdges((eds) => addEdge(edge, eds));
    },
    [setEdges]
  );

  const proOptions = { hideAttribution: true };

  const placeNode = (x: number, y: number, nodeType: IOperation) => {
    //Check we have a react flow instance
    if (!reactFlowInstance) return;

    //Check that the card is within the flow editor container
    if (
      x >= containerPosition.x &&
      x <= containerPosition.x + containerDimensions.width &&
      y >= containerPosition.y &&
      y <= containerPosition.y + containerDimensions.height
    ) {
      //Calculate the position of the node relative to the flow editor container
      const position = reactFlowInstance.screenToFlowPosition({ x, y });
      //Generate a guid for the node
      const id = `node-${Math.random()}`;

      //Remove all space from the node name
      const nodeTypeName = nodeType.name.replace(/\s/g, "");
      const nodeTypeLower = `type-${nodeTypeName.toLowerCase()}`;
      const newNode = {
        id: id,
        type: nodeTypeLower,
        position: position,
        data: { label: nodeType.name },
      };
      //Add the node to the nodes list
      setNodes((nodes) => nodes.concat(newNode));
    }
  };

  //Listen for the flow window resizing
  //---------------------------------------------------------------------------------------------------

  const handleWindowResize = () => {
    if (flowEditorContainerRef.current) {
      const containerRect = flowEditorContainerRef.current.getBoundingClientRect();
      setContainerDimensions({
        width: containerRect.width,
        height: containerRect.height,
      });
      setContainerPosition({
        x: containerRect.left,
        y: containerRect.top,
      });
    }
  };

  //Listen for ref changes
  useEffect(() => {
    handleWindowResize();
  }, [flowEditorContainerRef]);

  //Listen for window resize
  useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);

  //---------------------------------------------------------------------------------------------------

  const handleTransform = useCallback(
    (x: number, y: number, zoom: number) => {
      setViewport({ x, y, zoom }, { duration: 800 });
    },
    [setViewport]
  );

  //Manage node selection
  const handleNodeEditSelect = (node: CustomNodeData, xPos: number, yPos: number) => {
    console.log(node, xPos, yPos);

    //Check that we have a react flow instance
    if (!reactFlowInstance) return;

    //Animate the flow editor to the node accounting for the sidebar width
    const halfContainerWidth = (containerDimensions.width - NODE_EDITOR_SIDEBAR_WIDTH) / 2;
    const halfContainerHeight = containerDimensions.height / 2;

    const targetX = xPos + halfContainerWidth + NODE_EDITOR_SIDEBAR_WIDTH - NODE_CARD_WIDTH / 2;
    const targetY = yPos + halfContainerHeight - NODE_EDITOR_ANIMATION_OFFSET_Y;
    const zoom = 1;

    //Animate the flow editor to the node
    handleTransform(targetX, targetY, zoom);

    //Show the node editor sidebar
    setShowingNodeEditorSidebar(true);

    //Set the selected node
    setSelectedNode(node);
  };

  return (
    <div className="schedule-editor-page__container">
      <HeadingComponent
        title="Schedule Editor"
        description="Designed for creating and managing schedules in a lab setting. It offers a detailed view of the schedule, allowing you to add, edit, and delete tasks. To add a task, simply drag the action you want to perform in the sequence from the right hand operations panel. As always if you have any questions or need a hand, please contact us here."
      />
      <div className="schedule-editor__inner-container">
        <div className="schedule-editor__inner-container__left-side">
          <NodeSelectContext.Provider value={{ triggerNodeSelect: handleNodeEditSelect }}>
            <div className="flow-designer__container" ref={flowEditorContainerRef}>
              <ReactFlow
                nodes={nodes}
                edges={edges}
                onNodesChange={onNodesChange}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                proOptions={proOptions}
                onInit={setReactFlowInstance}
                panOnScroll={true}
                selectionOnDrag={true}
                nodeTypes={nodeTypes}
              >
                <Controls />
                <Background variant={BackgroundVariant.Dots} gap={12} size={1} color="#c5c5c5" />
              </ReactFlow>
            </div>
          </NodeSelectContext.Provider>
          <div
            className={`schedule-editor__node-sidebar ${
              showingNodeEditorSidebar ? "node-sidebar--active" : ""
            }`}
          >
            <FlowSidebar
              data={selectedNode}
              closeSidebar={() => setShowingNodeEditorSidebar(false)}
            />
          </div>
        </div>
        <div className="schedule-editor__inner-container__right-side" ref={sidebarContainerRef}>
          <div className="schedule-sidebar__title-container">
            <h3 className="schedule-sidebar__title">Robotic Hand Project</h3>
            <AiOutlineMore className="schedule-sidebar__more-icon" />
          </div>
          <div className="schedule-sidebar__schedule-sidebar-title-tabs">
            <div className="schedule-sidebar-tabs__container">
              <TabComponent
                title="Schedules"
                onClick={() => setActiveTab(ActiveTab.Schedules)}
                active={activeTab === ActiveTab.Schedules}
              />
              <TabComponent
                title="Operations"
                onClick={() => setActiveTab(ActiveTab.Operations)}
                active={activeTab === ActiveTab.Operations}
              />
              <TabComponent
                title="Layers"
                onClick={() => setActiveTab(ActiveTab.Layers)}
                active={activeTab === ActiveTab.Layers}
              />
            </div>
          </div>
          <div className="schedule-sidebar__content-container">
            {activeTab === ActiveTab.Schedules && <ScheduleSidebar schedules={schedules} />}
            {activeTab === ActiveTab.Operations && (
              <OperationsSidebar operations={operations} placeNode={placeNode} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleEditorPage;
