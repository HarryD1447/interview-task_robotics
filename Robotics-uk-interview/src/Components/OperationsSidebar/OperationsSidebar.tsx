import React from "react";
import { IOperation } from "../../Pages/ScheduleEditorPage/ScheduleEditorPage";
import ProjectSidebarCard from "../ProjectSidebarCard/ProjectSidebarCard";
import { AiOutlineSetting } from "react-icons/ai";
import "./OperationsSidebar.scss";

interface IOperationsSidebarProps {
  operations: IOperation[];
}

const OperationsSidebar = ({ operations }: IOperationsSidebarProps) => {
  return (
    <div>
      {operations.map((operation) => (
        <ProjectSidebarCard
          key={operation.id}
          onClick={() => console.log("Operation Clicked")}
          details={operation}
          rightIcon={<AiOutlineSetting className="operations-card__settings-icon" />}
          tooltip="Settings"
        />
      ))}
    </div>
  );
};

export default OperationsSidebar;
