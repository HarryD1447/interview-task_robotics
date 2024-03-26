import React from "react";
import "./FlowSidebarTextInput.scss";
import ComponentWithLabel from "../ComponentWithLabel/ComponentWithLabel";

interface IFlowSidebarTextInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  tooltip?: string;
}

const FlowSidebarTextInput = ({ value, setValue, label, tooltip }: IFlowSidebarTextInputProps) => {
  return (
    <ComponentWithLabel label={label} tooltip={tooltip}>
      <input
        className="flow-sidebar-text-input__input"
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </ComponentWithLabel>
  );
};

export default FlowSidebarTextInput;
