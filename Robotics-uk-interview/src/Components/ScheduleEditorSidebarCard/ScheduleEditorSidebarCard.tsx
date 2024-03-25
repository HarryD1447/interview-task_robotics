import React from "react";
import "./ScheduleEditorSidebarCard.scss";
import { AiOutlineSliders } from "react-icons/ai";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
import { ISchedule } from "../../Pages/ScheduleEditorPage/ScheduleEditorPage";
import IconRenderer from "../IconRenderer/IconRenderer";

interface IScheduleCardProps {
  onClick: () => void;
  schedule: ISchedule;
  rightIcon?: React.ReactNode;
}

const ScheduleCard = ({ onClick, schedule, rightIcon }: IScheduleCardProps) => {
  return (
    <div className="schedule-card__container" onDoubleClick={onClick}>
      <div
        className="schedule-card__icon-container"
        style={{
          backgroundColor: schedule.backgroundColor,
        }}
      >
        <IconRenderer type={schedule.icon} fontSize={24} color={schedule.color} />
      </div>
      <div className="schedule-card__name-container">
        <span className="schedule-card__name">{schedule.name}</span>
      </div>
      {rightIcon && (
        <CustomTooltip tooltip="Details">
          <div className="schedule-card__icon-container" onClick={onClick}>
            {rightIcon}
          </div>
        </CustomTooltip>
      )}
    </div>
  );
};

export default ScheduleCard;
