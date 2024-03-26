import React, { Children, useEffect, useState } from "react";
import { useCallback } from "react";
import { Handle, NodeProps, Position, SelectionMode } from "reactflow";
import "./BaseCustomFlowCard.scss";
import IconRenderer, { IconType } from "../../IconRenderer/IconRenderer";
import { AiFillSetting, AiOutlineSetting } from "react-icons/ai";
import chroma from "chroma-js";

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
  nodeProps: NodeProps;
  targetConnectorEnabled?: boolean;
  sourceConnectorEnabled?: boolean;
}

const BaseCustomFlowCard = ({
  bgColor,
  color,
  title,
  icon,
  children,
  nodeProps,
  targetConnectorEnabled = true,
  sourceConnectorEnabled = true,
}: IBaseCustomFlowCardProps) => {
  // type RbgColorType = { r: number; g: number; b: number };
  // const [colorAsRBG, setColorAsRBG] = useState<RbgColorType>({
  //   r: 0,
  //   g: 0,
  //   b: 0,
  // });

  // //Convert the color to RGB
  // useEffect(() => {
  //   const rgbColor = chroma(color).rgb();

  //   const colorAsRBG = {
  //     r: rgbColor[0],
  //     g: rgbColor[1],
  //     b: rgbColor[2],
  //   };
  //   setColorAsRBG(colorAsRBG);
  // }, [color]);

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
          boxShadow: nodeProps.selected
            ? `0px 0px 8px 5px ${chroma(color).alpha(0.16).css()}`
            : "0px 0px 8px 5px rgba(0, 0, 0, 0.02)",
          borderTopRightRadius: nodeProps.selected ? "0px" : "5px",
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
          {!nodeProps.selected && <IconRenderer type={icon} color={color} fontSize={18} />}
          {nodeProps.selected && (
            <AiOutlineSetting color={color} className="base-flow-card__settings-icon" />
          )}
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
