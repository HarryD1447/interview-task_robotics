import React from "react";
import "./TabComponent.scss";

interface ITabComponentProps {
  title: string;
  active?: boolean;
  onClick: () => void;
}

const TabComponent = ({ title, active, onClick }: ITabComponentProps) => {
  return (
    <div className="tab-component__container" onClick={onClick}>
      <span className="tab-component__title">{title}</span>
      <div className={`tab-component__active-indicator ${active ? "tab-component__active" : ""}`} />
    </div>
  );
};

export default TabComponent;
