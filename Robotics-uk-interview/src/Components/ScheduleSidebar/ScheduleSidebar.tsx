import React from "react";
import { ISchedule } from "../../Pages/ScheduleEditorPage/ScheduleEditorPage";
import ProjectSidebarCard from "../ProjectSidebarCard/ProjectSidebarCard";
import { AiOutlineSliders } from "react-icons/ai";
import "./ScheduleSidebar.scss";

interface IScheduleSidebarProps {
  schedules: ISchedule[];
}

const ScheduleSidebar = ({ schedules }: IScheduleSidebarProps) => {
  return (
    <div>
      {schedules.map((schedule) => (
        <ProjectSidebarCard
          key={schedule.id}
          details={schedule}
          onClick={() => {
            console.log("Clicked on schedule: ", schedule.name);
          }}
          rightIcon={<AiOutlineSliders className="schedule-card__icon" />}
          tooltip="Details"
        />
      ))}
    </div>
  );
};

export default ScheduleSidebar;
