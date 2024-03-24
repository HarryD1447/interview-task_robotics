import React from "react";
import "./ScheduleCard.scss";
import { AiOutlineSliders } from "react-icons/ai";
import CustomTooltip from "../CustomTooltip/CustomTooltip";

interface IScheduleCardProps {
  name: string;
  onClick: () => void;
}

const ScheduleCard = ({ name, onClick }: IScheduleCardProps) => {
  return (
    <div className="schedule-card__container" onDoubleClick={onClick}>
      <div className="schedule-card__name-container">
        <span className="schedule-card__name">{name}</span>
      </div>
      <CustomTooltip tooltip="Details">
        <div className="schedule-card__icon-container" onClick={onClick}>
          <AiOutlineSliders className="schedule-card__icon" />
        </div>
      </CustomTooltip>
    </div>
  );
};

export default ScheduleCard;
