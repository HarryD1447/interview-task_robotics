import React, { useState } from "react";
import "./ScheduleEditorPage.scss";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";
import OperationButton from "../../Components/OperationButton/OperationButton";
import { AiOutlineMore, AiOutlinePlus } from "react-icons/ai";
import ProjectSidebarCard from "../../Components/ProjectSidebarCard/ProjectSidebarCard";
import FlowDesigner from "../../Components/FlowDesigner/FlowDesigner";
import TabComponent from "../../Components/TabComponent/TabComponent";
import ScheduleSidebar from "../../Components/ScheduleSidebar/ScheduleSidebar";
import { IconType } from "../../Components/IconRenderer/IconRenderer";
import OperationsSidebar from "../../Components/OperationsSidebar/OperationsSidebar";

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
    icon: IconType.Rocket,
  },
  {
    id: "14d6796d-f29d-47a8-8158-5a1664674054",
    name: "Operation",
    backgroundColor: "#FBECE1",
    color: "#FFAB2E",
    icon: IconType.Filter,
  },
  {
    id: "586136f8-6717-4b04-b9d8-d6ff2168b93d",
    name: "Start / Begin",
    backgroundColor: "#E1FBE2",
    color: "#5FD119",
    icon: IconType.Arm,
  },
  {
    id: "22767aa0-2dbf-47e7-ab94-49dc66ba507f",
    name: "Sleep",
    backgroundColor: "#E1E9FB",
    color: "#007BFF",
    icon: IconType.Rocket,
  },
  {
    id: "4b32a09e-0f3c-429b-9b83-c15429e7cf65",
    name: "End Schedule Thread",
    backgroundColor: "#FBE3E1",
    color: "#FF2E00",
    icon: IconType.Filter,
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

const ScheduleEditorPage = () => {
  const [schedules, setSchedules] = useState<ISchedule[]>(DEFAULT_SCHEDULES);
  const [operations, setOperations] = useState<IOperation[]>(DEFAULT_OPERATIONS);
  const [activeTab, setActiveTab] = useState<ActiveTab>(ActiveTab.Schedules);

  return (
    <div className="schedule-editor-page__container">
      <HeadingComponent
        title="Schedule Editor"
        description="Designed for creating and managing schedules in a lab setting. It offers a detailed view of the schedule, allowing you to add, edit, and delete tasks. To add a task, simply drag the action you want to perform in the sequence from the right hand operations panel. As always if you have any questions or need a hand, please contact us here."
      />
      <div className="schedule-editor__inner-container">
        <div className="schedule-editor__inner-container__left-side">
          <FlowDesigner />
        </div>
        <div className="schedule-editor__inner-container__right-side">
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
            {activeTab === ActiveTab.Operations && <OperationsSidebar operations={operations} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleEditorPage;
