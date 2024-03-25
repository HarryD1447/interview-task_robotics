import React from "react";
import BaseCustomFlowCard from "./BaseCustomFlowCard/BaseCustomFlowCard";
import { IconType } from "../IconRenderer/IconRenderer";

const OperationFlowCard = () => {
  return (
    <BaseCustomFlowCard
      bgColor="#FBECE1"
      color="#FFAB2E"
      icon={IconType.Operation}
      title="Operation"
    >
      <span>Hello</span>
    </BaseCustomFlowCard>
  );
};

export default OperationFlowCard;
