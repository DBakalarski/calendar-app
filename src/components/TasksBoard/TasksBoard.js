import { shallowEqual, useSelector } from "react-redux";

export interface TasksBoardProps {

}

const TasksBoard: React.FC<TasksBOardProps> = () => {
    const tasks = useSelector(state => state.tasks.tasks, shallowEqual)

    return (
        <div>tasks</div>
    );
}

export default TasksBoard;