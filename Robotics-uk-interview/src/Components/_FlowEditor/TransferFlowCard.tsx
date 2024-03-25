import React from "react";
import BaseCustomFlowCard from "./BaseCustomFlowCard/BaseCustomFlowCard";
import { IconType } from "../IconRenderer/IconRenderer";

const TransferFlowCard = () => {
  return (
    <BaseCustomFlowCard bgColor="#FBE1F4" color="#FF2E8B" icon={IconType.Transfer} title="Transfer">
      <span>Hello</span>
    </BaseCustomFlowCard>
  );
};

export default TransferFlowCard;
