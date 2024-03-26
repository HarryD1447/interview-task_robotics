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
      <span>Hello</span>
    </BaseCustomFlowCard>
  );
};

export default EndScheduleFlowCard;
