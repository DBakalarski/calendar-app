import { shallowEqual, useSelector } from "react-redux";
import "./taskBoard.scss";
import SingleTask from "../SingleTask";

export interface TasksBoardProps {}

const TasksBoard: React.FC<TasksBOardProps> = () => {
  const tasks = useSelector(
    (state) =>
      state.tasks.tasks.slice().sort((a, b) => (a.date > b.date ? 1 : -1)),
    shallowEqual
  );

  return (
    <div className="tasks-container">
      {console.log(tasks)}
      {tasks.length ? <h2 className="title">Tasks</h2> : null}
      {tasks.map((item) => (
        <SingleTask
          name={item.value}
          date={item.date}
          id={item.key}
          key={item.key}
        />
      ))}
    </div>
  );
};

export default TasksBoard;
