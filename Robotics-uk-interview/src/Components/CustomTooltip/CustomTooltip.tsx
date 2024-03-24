import { Tooltip } from "@chakra-ui/react";
import React from "react";

interface ICustomTooltipProps {
  tooltip?: string;
  children: React.ReactNode;
}

const CustomTooltip = ({ tooltip, children }: ICustomTooltipProps) => {
  return (
    <Tooltip label={tooltip} openDelay={300} hasArrow>
      {children}
    </Tooltip>
  );
};

export default CustomTooltip;
