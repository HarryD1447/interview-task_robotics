import { createContext } from "react";
import { CustomNodeData } from "../types/CustomNodeData";

interface INodeSelectContext {
  triggerNodeSelect: (node: CustomNodeData, xPos: number, yPos: number) => void;
}

export const NodeSelectContext = createContext<INodeSelectContext>({
  triggerNodeSelect: () => {},
});

// export const NodeSelectProvider = ({ children }: {children: React.ReactNode}) => {

//     const triggerNodeSelect = (node: CustomNodeData, xPos: number, yPos: number) => {
//         console.log(node, xPos, yPos);
//     };

//     return (
//         <NodeSelectContext.Provider value={{ triggerNodeSelect }}>
//             {children}
//         </NodeSelectContext.Provider>
//     );
// };
