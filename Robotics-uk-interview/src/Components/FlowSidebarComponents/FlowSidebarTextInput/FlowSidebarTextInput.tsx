import React, { useEffect, useState } from "react";
import "./FlowSidebarTextInput.scss";
import ComponentWithLabel from "../ComponentWithLabel/ComponentWithLabel";
import { MdCopyAll } from "react-icons/md";
import { Tooltip, useToast } from "@chakra-ui/react";

interface IFlowSidebarTextInputProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  label: string;
  tooltip?: string;
}

const HOVER_COPY_TIMEOUT = 200;

const FlowSidebarTextInput = ({ value, setValue, label, tooltip }: IFlowSidebarTextInputProps) => {
  //Notification for when the value is copied to the clipboard
  const toast = useToast();

  //Handle the styling of the copy icon when hovering over it
  const [isHovering, setIsHovering] = useState(false);
  const [hoverTimer, setHoverTimer] = useState<number | null>(null);

  const handleMouseEnter = () => {
    const timer = setTimeout(() => setIsHovering(true), HOVER_COPY_TIMEOUT);
    setHoverTimer(timer);
  };

  const handleMouseLeave = () => {
    if (hoverTimer) {
      clearTimeout(hoverTimer);
    }
    setIsHovering(false);
    setHoverTimer(null);
  };

  useEffect(() => {
    return () => {
      if (hoverTimer) {
        clearTimeout(hoverTimer);
      }
    };
  }, [hoverTimer]);

  //Copy the value to the clipboard
  const copyToClipboard = () => {
    if (value === "") return;

    navigator.clipboard.writeText(value);

    toast({
      title: "Copied to clipboard",
      status: "success",
      duration: 2000,
      isClosable: true,
      position: "top",
    });
  };

  return (
    <ComponentWithLabel label={label} tooltip={tooltip}>
      <div className="flow-sidebar-text-input__container">
        <input
          className="flow-sidebar-text-input__input"
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Tooltip label="Copy" openDelay={350} hasArrow isDisabled={value === ""}>
          <div
            className={`flow-sidebar-text-input__copy-container ${
              isHovering && value !== "" ? "flow-sidebar-text-input__copy-container--hover" : ""
            }`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={copyToClipboard}
          >
            <MdCopyAll className="flow-sidebar-text-input__copy-icon" />
          </div>
        </Tooltip>
      </div>
    </ComponentWithLabel>
  );
};

export default FlowSidebarTextInput;
