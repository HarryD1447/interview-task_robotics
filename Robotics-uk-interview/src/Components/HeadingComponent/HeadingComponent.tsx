import React from "react";
import "./HeadingComponent.scss";

interface IHeadingComponentProps {
  title: string;
  description: string;
}

const HeadingComponent = ({ title, description }: IHeadingComponentProps) => {
  return (
    <div className="heading-component__container">
      <h1 className="heading-component__title">{title}</h1>
      <p className="heading-component__description">{description}</p>
    </div>
  );
};

export default HeadingComponent;
