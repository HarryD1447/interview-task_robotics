import Sidebar from "../../Components/Sidebar/Sidebar";
import ScheduleEditorPage from "../../Pages/ScheduleEditorPage/ScheduleEditorPage";
import "./RootLayout.scss";

const RootLayout = () => {
  //Rooting would be managed here in a real application
  return (
    <div className="root-layout__container">
      <Sidebar />
      <ScheduleEditorPage />
    </div>
  );
};

export default RootLayout;
