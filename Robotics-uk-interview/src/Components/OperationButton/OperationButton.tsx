import React from "react";
import "./OperationButton.scss";
import { Tooltip } from "@chakra-ui/react";
import CustomTooltip from "../CustomTooltip/CustomTooltip";

interface IOperationButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  tooltip?: string;
}

const OperationButton = ({ children, onClick, tooltip }: IOperationButtonProps) => {
  return (
    <CustomTooltip tooltip={tooltip}>
      <div className="operation-button" onClick={onClick}>
        {children}
      </div>
    </CustomTooltip>
  );
};

export default OperationButton;
