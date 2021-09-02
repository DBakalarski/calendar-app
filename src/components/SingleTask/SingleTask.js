import { useDispatch } from "react-redux";
import { removeTask } from "../../data/actions/tasks.action";
import "./singleTask.scss";

export interface SingleTaskProps {
  name: string;
  date: string;
  id: string;
}

const SingleTask: React.FC<SingleTaskProps> = ({ name, date, id }) => {
  const dispatch = useDispatch();

  const handleDeleteTask = () => {
    console.log(id);
    dispatch(removeTask(id));
  };

  return (
    <div className="single-task">
      <p className="name">{name} </p> <p className="date">{date}</p>
      <button className="remove-task" onClick={handleDeleteTask}>
        x
      </button>
    </div>
  );
};

export default SingleTask;
