import React from "react";
import "./ProjectSidebarCard.scss";
import CustomTooltip from "../CustomTooltip/CustomTooltip";
import { ISidebarOperation } from "../../Pages/ScheduleEditorPage/ScheduleEditorPage";
import IconRenderer from "../IconRenderer/IconRenderer";

interface IScheduleCardProps {
  onClick: () => void;
  details: ISidebarOperation;
  rightIcon?: React.ReactNode;
  tooltip?: string;
  fontSize?: number;
}

const ProjectSidebarCard = ({
  onClick,
  details,
  rightIcon,
  tooltip,
  fontSize,
}: IScheduleCardProps) => {
  return (
    <div className="schedule-card__container" onDoubleClick={onClick}>
      <div
        className="schedule-card__icon-container"
        style={{
          backgroundColor: details.backgroundColor,
        }}
      >
        <IconRenderer type={details.icon} fontSize={fontSize || 24} color={details.color} />
      </div>
      <div className="schedule-card__name-container">
        <span className="schedule-card__name">{details.name}</span>
      </div>
      {rightIcon && (
        <CustomTooltip tooltip={tooltip}>
          <div className="schedule-card__icon-container block--cursor-pointer" onClick={onClick}>
            {rightIcon}
          </div>
        </CustomTooltip>
      )}
    </div>
  );
};

export default ProjectSidebarCard;
