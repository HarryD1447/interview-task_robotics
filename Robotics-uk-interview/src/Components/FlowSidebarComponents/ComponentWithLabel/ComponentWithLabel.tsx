import React from "react";
import "./ComponentWithLabel.scss";
import { Tooltip } from "@chakra-ui/react";
import { AiOutlineQuestionCircle } from "react-icons/ai";

interface IComponentWithLabelProps {
  label: string;
  children: React.ReactNode;
  tooltip?: string;
}

const ComponentWithLabel = ({ label, children, tooltip }: IComponentWithLabelProps) => {
  return (
    <div className="component-with-label__container">
      <div className="component-with-label__title-container">
        <span className="component-with-label__title">{label}</span>
        {tooltip && (
          <Tooltip label={tooltip} openDelay={300} hasArrow placement="right">
            <div>
              <AiOutlineQuestionCircle className="component-with-label__tooltip-icon" />
            </div>
          </Tooltip>
        )}
      </div>
      <div className="component-with-label__content-container">{children}</div>
    </div>
  );
};

export default ComponentWithLabel;
