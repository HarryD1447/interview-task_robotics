import React, { Children } from "react";
import { useCallback } from "react";
import { Handle, Position } from "reactflow";
import "./BaseCustomFlowCard.scss";
import IconRenderer, { IconType } from "../../IconRenderer/IconRenderer";

const handleStyle: React.CSSProperties = {
  width: "20px",
  height: "8px",
  borderRadius: "10px",
};

interface IBaseCustomFlowCardProps {
  bgColor: string;
  color: string;
  title: string;
  icon: IconType;
  children?: React.ReactNode;
  targetConnectorEnabled?: boolean;
  sourceConnectorEnabled?: boolean;
}

const BaseCustomFlowCard = ({
  bgColor,
  color,
  title,
  icon,
  children,
  targetConnectorEnabled = true,
  sourceConnectorEnabled = true,
}: IBaseCustomFlowCardProps) => {
  return (
    <>
      {targetConnectorEnabled && (
        <Handle
          type="target"
          position={Position.Top}
          style={{
            ...handleStyle,
            background: bgColor,
            border: `1px solid ${color}`,
          }}
        />
      )}
      <div
        className="base-custom-flow-card__inner-container"
        style={{
          backgroundColor: bgColor,
          borderColor: color,
        }}
      >
        <div
          className="base-flow-card__title-container"
          style={{
            borderColor: color,
          }}
        >
          <span
            className="base-flow-card__title-text"
            style={{
              color: color,
            }}
          >
            {title}
          </span>
          <IconRenderer type={icon} color={color} fontSize={18} />
        </div>
        <div className="base-flow-card__body-container">{children}</div>
      </div>
      {sourceConnectorEnabled && (
        <Handle
          type="source"
          position={Position.Bottom}
          id="a"
          style={{
            ...handleStyle,
            background: bgColor,
            border: `1px solid ${color}`,
          }}
        />
      )}
    </>
  );
};

export default BaseCustomFlowCard;
