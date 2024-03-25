import React from "react";
import BaseCustomFlowCard from "./BaseCustomFlowCard/BaseCustomFlowCard";
import { IconType } from "../IconRenderer/IconRenderer";

const SleepFlowCard = () => {
  return (
    <BaseCustomFlowCard bgColor="#E1E9FB" color="#007BFF" icon={IconType.Sleep} title="Sleep">
      <span>Hello</span>
    </BaseCustomFlowCard>
  );
};

export default SleepFlowCard;
