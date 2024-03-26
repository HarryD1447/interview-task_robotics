import { IOperation } from "../Pages/ScheduleEditorPage/ScheduleEditorPage";
import { OperationType } from "./OperationType";

export type CustomNodeData = {
  actionType: OperationType;
  id: string;
  operation: IOperation;
};
