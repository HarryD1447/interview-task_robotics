import React from "react";
import BaseCustomFlowCard from "./BaseCustomFlowCard/BaseCustomFlowCard";
import { IconType } from "../IconRenderer/IconRenderer";
import { NodeProps } from "reactflow";
import { OperationType } from "../../types/OperationType";

const StartBeginFlowCard = (props: NodeProps) => {
  return (
    <BaseCustomFlowCard
      bgColor="#E1FBE2"
      color="#5FD119"
      icon={IconType.Start}
      title="Start / Begin"
      targetConnectorEnabled={false}
      nodeProps={props}
      operationType={OperationType.Start}
    >
      <div className="flow-card__container">
        <span className="flow-card__label">Trigger Mode:</span>
        <span className="flow-card__value">Auto</span>
      </div>
    </BaseCustomFlowCard>
  );
};

export default StartBeginFlowCard;
