import {
  Flag818736,
  Moon865813,
  OperationalSystem7663928,
  PlayButton1055007,
  Transfer876784,
} from "../../assets/operationIcons/operationIconComponents";
import {
  Filter5340212,
  Industry13878015,
  Shuttle2285551,
} from "../../assets/scheduleLogos/scheduleLogosAsComponents";

export enum IconType {
  Rocket,
  Filter,
  Arm,
  Transfer,
  Operation,
  Start,
  Sleep,
  End,
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
      case IconType.Transfer:
        return <Transfer876784 fontSize={fontSize} fill={color} />;
      case IconType.Operation:
        return <OperationalSystem7663928 fontSize={fontSize} fill={color} />;
      case IconType.Start:
        return <PlayButton1055007 fontSize={fontSize} fill={color} />;
      case IconType.Sleep:
        return <Moon865813 fontSize={fontSize} fill={color} />;
      case IconType.End:
        return <Flag818736 fontSize={fontSize} fill={color} />;
    }
  };

  return <div className="icon-renderer__container">{getIcon()}</div>;
};

export default IconRenderer;
