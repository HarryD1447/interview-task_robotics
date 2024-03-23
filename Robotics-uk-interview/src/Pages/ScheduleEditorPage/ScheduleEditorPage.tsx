import React from "react";
import "./ScheduleEditorPage.scss";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";

const ScheduleEditorPage = () => {
  return (
    <div className="schedule-editor-page__container">
      <HeadingComponent
        title="Schedule Editor"
        description="Designed for creating and managing schedules in a lab setting. It offers a detailed view of the schedule, allowing you to add, edit, and delete tasks. To add a task, simply drag the action you want to perform in the sequence from the right hand operations panel. As always if you have any questions or need a hand, please contact us here."
      />
    </div>
  );
};

export default ScheduleEditorPage;
