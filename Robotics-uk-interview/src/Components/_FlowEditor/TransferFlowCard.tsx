import React from "react";
import BaseCustomFlowCard from "./BaseCustomFlowCard/BaseCustomFlowCard";
import { IconType } from "../IconRenderer/IconRenderer";
import { NodeProps } from "reactflow";

const TransferFlowCard = (props: NodeProps) => {
  return (
    <BaseCustomFlowCard
      bgColor="#FBE1F4"
      color="#FF2E8B"
      icon={IconType.Transfer}
      title="Transfer"
      nodeProps={props}
    >
      <span>Hello</span>
    </BaseCustomFlowCard>
  );
};

export default TransferFlowCard;
