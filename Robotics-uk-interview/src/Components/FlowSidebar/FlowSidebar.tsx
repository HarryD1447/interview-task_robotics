import React from "react";
import "./FlowSidebar.scss";
import { OperationType } from "../../types/OperationType";
import { CustomNodeData } from "../../types/CustomNodeData";
import IconRenderer from "../IconRenderer/IconRenderer";
import { IoClose } from "react-icons/io5";
import TabComponent from "../TabComponent/TabComponent";
import TransferGeneralFlowConfig from "../_FlowSidebarEditorControls/TransferComponent/TransferGeneralFlowConfig";

interface IFlowSidebarProps {
  data: CustomNodeData | null;
  closeSidebar: () => void;
}

enum ActiveTab {
  General,
  ExternalLinks,
  Logs,
}

const FlowSidebar = ({ data, closeSidebar }: IFlowSidebarProps) => {
  if (!data) {
    return <span>No data</span>;
  }

  const [activeTab, setActiveTab] = React.useState<ActiveTab>(ActiveTab.General);

  return (
    <div className="flow-sidebar__container">
      <div className="flow-sidebar__header">
        <div className="flow-sidebar__title-container">
          <div
            className="flow-sidebar__title-icon-container"
            style={{
              backgroundColor: data.operation.backgroundColor,
            }}
          >
            <IconRenderer fontSize={24} type={data.operation.icon} color={data.operation.color} />
          </div>
          <span className="flow-sidebar__title">{data.operation.name}</span>
          <div className="flow-sidebar__close-sidebar-container" onClick={closeSidebar}>
            <IoClose className="flow-sidebar__close-sidebar-icon" />
          </div>
        </div>
      </div>
      <div className="flow-sidebar__nav-menu-container">
        <div className="schedule-sidebar-tabs__container">
          <TabComponent
            title="General"
            onClick={() => setActiveTab(ActiveTab.General)}
            active={activeTab === ActiveTab.General}
          />
          <TabComponent
            title="External Links"
            onClick={() => setActiveTab(ActiveTab.ExternalLinks)}
            active={activeTab === ActiveTab.ExternalLinks}
          />
          <TabComponent
            title="Logs"
            onClick={() => setActiveTab(ActiveTab.Logs)}
            active={activeTab === ActiveTab.Logs}
          />
        </div>
      </div>
      <div className="flow-sidebar__content-container">
        {activeTab === ActiveTab.General && data.actionType === OperationType.Transfer && (
          <TransferGeneralFlowConfig />
        )}
      </div>
    </div>
  );
};

export default FlowSidebar;
