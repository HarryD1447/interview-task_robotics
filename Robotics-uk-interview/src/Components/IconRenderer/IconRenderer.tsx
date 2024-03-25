import {
  Filter5340212,
  Industry13878015,
  Shuttle2285551,
} from "../../assets/scheduleLogos/scheduleLogosAsComponents";

export enum IconType {
  Rocket,
  Filter,
  Arm,
}

interface IIconRendererProps {
  type: IconType;
  color?: string;
  fontSize: number;
}

const IconRenderer = ({ type, fontSize, color }: IIconRendererProps) => {
  const getIcon = () => {
    switch (type) {
      case IconType.Rocket:
        return <Shuttle2285551 fontSize={fontSize} fill={color} />;
      case IconType.Filter:
        return <Filter5340212 fontSize={fontSize} fill={color} />;
      case IconType.Arm:
        return <Industry13878015 fontSize={Math.round(fontSize * 1.3)} fill={color} />;
    }
  };

  return <div className="icon-renderer__container">{getIcon()}</div>;
};

export default IconRenderer;
