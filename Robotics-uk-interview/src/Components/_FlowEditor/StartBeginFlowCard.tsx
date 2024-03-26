import React from "react";
import BaseCustomFlowCard from "./BaseCustomFlowCard/BaseCustomFlowCard";
import { IconType } from "../IconRenderer/IconRenderer";
import { NodeProps } from "reactflow";

const StartBeginFlowCard = (props: NodeProps) => {
  return (
    <BaseCustomFlowCard
      bgColor="#E1FBE2"
      color="#5FD119"
      icon={IconType.Start}
      title="Start / Begin"
      targetConnectorEnabled={false}
      nodeProps={props}
    >
      <span>Hello</span>
    </BaseCustomFlowCard>
  );
};

export default StartBeginFlowCard;
