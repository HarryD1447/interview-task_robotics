import React from "react";
import BaseCustomFlowCard from "./BaseCustomFlowCard/BaseCustomFlowCard";
import { IconType } from "../IconRenderer/IconRenderer";
import { NodeProps } from "reactflow";
import { OperationType } from "../../types/OperationType";

const EndScheduleFlowCard = (props: NodeProps) => {
  return (
    <BaseCustomFlowCard
      bgColor="#FBE3E1"
      color="#FF2E00"
      icon={IconType.End}
      title="End Schedule"
      sourceConnectorEnabled={false}
      nodeProps={props}
      operationType={OperationType.End}
    >
      <div className="flow-card__container">
        <span className="flow-card__label">Logging:</span>
        <span className="flow-card__value">On</span>
      </div>
    </BaseCustomFlowCard>
  );
};

export default EndScheduleFlowCard;
