import React from "react";
import "./FlowSidebarToggle.scss";
import ComponentWithLabel from "../ComponentWithLabel/ComponentWithLabel";
import { Switch } from "@chakra-ui/react";

interface IFlowSidebarToggleProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  label: string;
  subtitle: string;
  tooltip?: string;
}

const FlowSidebarToggle = ({
  active,
  setActive,
  label,
  subtitle,
  tooltip,
}: IFlowSidebarToggleProps) => {
  return (
    <div className="flow-sidebar-toggle__outer-container">
      <ComponentWithLabel label={label} tooltip={tooltip}>
        <div className="flow-sidebar-toggle__inner-container">{subtitle}</div>
      </ComponentWithLabel>
      <div className="flow-sidebar-toggle__button-container">
        <Switch size={"md"} />
      </div>
    </div>
  );
};

export default FlowSidebarToggle;
