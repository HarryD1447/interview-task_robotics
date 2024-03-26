import React from "react";
import BaseCustomFlowCard from "./BaseCustomFlowCard/BaseCustomFlowCard";
import { IconType } from "../IconRenderer/IconRenderer";
import { NodeProps } from "reactflow";

const OperationFlowCard = (props: NodeProps) => {
  return (
    <BaseCustomFlowCard
      bgColor="#FBECE1"
      color="#FFAB2E"
      icon={IconType.Operation}
      title="Operation"
      nodeProps={props}
    >
      <span>Hello</span>
    </BaseCustomFlowCard>
  );
};

export default OperationFlowCard;
