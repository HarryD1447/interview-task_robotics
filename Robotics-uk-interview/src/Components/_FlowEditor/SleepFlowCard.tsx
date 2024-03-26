import React from "react";
import BaseCustomFlowCard from "./BaseCustomFlowCard/BaseCustomFlowCard";
import { IconType } from "../IconRenderer/IconRenderer";
import { NodeProps } from "reactflow";

const SleepFlowCard = (props: NodeProps) => {
  return (
    <BaseCustomFlowCard
      bgColor="#E1E9FB"
      color="#007BFF"
      icon={IconType.Sleep}
      title="Sleep"
      nodeProps={props}
    >
      <span>Hello</span>
    </BaseCustomFlowCard>
  );
};

export default SleepFlowCard;
