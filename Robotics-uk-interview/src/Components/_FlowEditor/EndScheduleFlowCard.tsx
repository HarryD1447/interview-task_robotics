import React from "react";
import BaseCustomFlowCard from "./BaseCustomFlowCard/BaseCustomFlowCard";
import { IconType } from "../IconRenderer/IconRenderer";

const EndScheduleFlowCard = () => {
  return (
    <BaseCustomFlowCard
      bgColor="#FBE3E1"
      color="#FF2E00"
      icon={IconType.End}
      title="End Schedule"
      sourceConnectorEnabled={false}
    >
      <span>Hello</span>
    </BaseCustomFlowCard>
  );
};

export default EndScheduleFlowCard;
