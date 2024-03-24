import React, { useState } from "react";
import "./ScheduleEditorPage.scss";
import HeadingComponent from "../../Components/HeadingComponent/HeadingComponent";
import OperationButton from "../../Components/OperationButton/OperationButton";
import { AiOutlinePlus } from "react-icons/ai";
import ScheduleCard from "../../Components/ScheduleCard/ScheduleCard";

export interface ISchedule {
  id: string;
  name: string;
}

const DEFAULT_SCHEDULES: ISchedule[] = [
  {
    id: "cd089239-af0f-4e4f-a1a4-468b2e48ef13",
    name: "RunBobotActivity1",
  },
  {
    id: "9726ca46-d42f-4078-8192-38f7e505ace3",
    name: "Schedule2",
  },
];

const ScheduleEditorPage = () => {
  const [schedules, setSchedules] = useState<ISchedule[]>(DEFAULT_SCHEDULES);

  return (
    <div className="schedule-editor-page__container">
      <HeadingComponent
        title="Schedule Editor"
        description="Designed for creating and managing schedules in a lab setting. It offers a detailed view of the schedule, allowing you to add, edit, and delete tasks. To add a task, simply drag the action you want to perform in the sequence from the right hand operations panel. As always if you have any questions or need a hand, please contact us here."
      />
      <div className="schedule-editor__inner-container">
        <div className="schedule-editor__inner-container__left-side">Left Side</div>
        <div className="schedule-editor__inner-container__right-side">
          <div className="schedule-editor__schedule-list__container schedule-editor__custom-scrollbar">
            <div className="schedule-editor__sidebar__title__container">
              <h3 className="schedule-editor__sidebar-title">Schedules</h3>
              <OperationButton tooltip="Create">
                <AiOutlinePlus className="schedule-editor__schedule-list__add-schedule-button__icon" />
              </OperationButton>
            </div>
            {schedules.map((schedule) => (
              <ScheduleCard
                key={schedule.id}
                name={schedule.name}
                onClick={() => console.log("Clicked: ", schedule.id)}
              />
            ))}
          </div>
          <div className="schedule-editor__operations-list__container schedule-editor__custom-scrollbar">
            <h3 className="schedule-editor__sidebar-title">Operations</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleEditorPage;
