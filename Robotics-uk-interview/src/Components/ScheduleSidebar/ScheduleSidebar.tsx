import React from "react";
import { ISchedule } from "../../Pages/ScheduleEditorPage/ScheduleEditorPage";
import ScheduleCard from "../ScheduleEditorSidebarCard/ScheduleEditorSidebarCard";
import { AiOutlineSliders } from "react-icons/ai";

interface IScheduleSidebarProps {
  schedules: ISchedule[];
}

const ScheduleSidebar = ({ schedules }: IScheduleSidebarProps) => {
  return (
    <div>
      {schedules.map((schedule) => (
        <ScheduleCard
          key={schedule.id}
          schedule={schedule}
          onClick={() => {
            console.log("Clicked on schedule: ", schedule.name);
          }}
          rightIcon={<AiOutlineSliders className="schedule-card__icon" />}
        />
      ))}
    </div>
  );
};

export default ScheduleSidebar;
