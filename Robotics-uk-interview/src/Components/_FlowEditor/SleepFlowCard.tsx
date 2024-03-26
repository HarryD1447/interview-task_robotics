import React from "react";
import BaseCustomFlowCard from "./BaseCustomFlowCard/BaseCustomFlowCard";
import { IconType } from "../IconRenderer/IconRenderer";
import { NodeProps } from "reactflow";
import { OperationType } from "../../types/OperationType";
import "./SleepFlowCard.scss";

const SleepFlowCard = (props: NodeProps) => {
  return (
    <BaseCustomFlowCard
      bgColor="#E1E9FB"
      color="#007BFF"
      icon={IconType.Sleep}
      title="Sleep"
      nodeProps={props}
      operationType={OperationType.Sleep}
    >
      <div className="flow-card__container">
        <span className="flow-card__label">Delay Time:</span>
        <span className="flow-card__value">0.30s</span>
      </div>
    </BaseCustomFlowCard>
  );
};

export default SleepFlowCard;
