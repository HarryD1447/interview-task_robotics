import React from "react";
import BaseCustomFlowCard from "./BaseCustomFlowCard/BaseCustomFlowCard";
import { IconType } from "../IconRenderer/IconRenderer";
import { NodeProps } from "reactflow";
import { OperationType } from "../../types/OperationType";

const OperationFlowCard = (props: NodeProps) => {
  return (
    <BaseCustomFlowCard
      bgColor="#FBECE1"
      color="#FFAB2E"
      icon={IconType.Operation}
      title="Operation"
      nodeProps={props}
      operationType={OperationType.Operation}
    >
      <span>Hello</span>
    </BaseCustomFlowCard>
  );
};

export default OperationFlowCard;
