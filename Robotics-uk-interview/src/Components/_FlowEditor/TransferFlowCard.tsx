import React from "react";
import BaseCustomFlowCard from "./BaseCustomFlowCard/BaseCustomFlowCard";
import { IconType } from "../IconRenderer/IconRenderer";
import { NodeProps } from "reactflow";
import { OperationType } from "../../types/OperationType";
import "./TransferFlowCard.scss";
import { Switch } from "@chakra-ui/react";

const TransferFlowCard = (props: NodeProps) => {
  return (
    <BaseCustomFlowCard
      bgColor="#FBE1F4"
      color="#FF2E8B"
      icon={IconType.Transfer}
      title="Transfer"
      nodeProps={props}
      operationType={OperationType.Transfer}
    >
      <div className="transfer-flow-card__container">
        <div className="transfer-flow-card__list-item">
          <span className="transfer-flow-card__label">Object Name:</span>
          <span className="transfer-flow-card__value">Plate</span>
        </div>
        <div className="transfer-flow-card__list-item">
          <span className="transfer-flow-card__label">Priority:</span>
          <span className="transfer-flow-card__value">3000 (High)</span>
        </div>
        <div className="transfer-flow-card__list-item">
          <span className="transfer-flow-card__label">Source:</span>
          <span className="transfer-flow-card__value">Cytomat2-Cell1</span>
        </div>
        <div className="transfer-flow-card__list-item">
          <span className="transfer-flow-card__label">Destination:</span>
          <span className="transfer-flow-card__value">Biorapt_Cel2</span>
        </div>
        <div className="tranfer-flow-card__divider" style={{ backgroundColor: "#FF2E8B" }} />
        <div className="transfer-flow-card__list-item">
          <span className="transfer-flow-card__label">Read Barcode:</span>
          <Switch size="sm" colorScheme="purple" defaultChecked />
        </div>
        <div className="transfer-flow-card__list-item">
          <span className="transfer-flow-card__label">Ignore Barcode Failure</span>
          <Switch size="sm" colorScheme="purple" defaultChecked mt={1} />
        </div>
      </div>
    </BaseCustomFlowCard>
  );
};

export default TransferFlowCard;
