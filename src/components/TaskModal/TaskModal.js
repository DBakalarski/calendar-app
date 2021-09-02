import './taskModal.scss'
import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask } from '../../data/actions/tasks.action';
import { v4 as uuidv4 } from 'uuid';
import { closeModal } from '../../data/actions/modal.actions';

interface FormElements extends HTMLFormControlsCollection {
    value: HTMLInputElement,
    date: HTMLInputElement
}
interface TasksFormElement extends HTMLFormElement {
    elements: FormElements
}

const TaskModal: React.FC<TaskModalProps> = () => {

    const dispatch = useDispatch();

    const [task, setTask] = useState({
        value: '',
        date: ''
    });

    const handleSubmit = (e: React.FormEvent<TasksFormElement>) => {
        e.preventDefault();
        if (!task.value || !task.date) {
            alert('Fill tasks values')
            return
        }
        handleCloseModal();
        dispatch(addTask(task.value, task.date, uuidv4()))
    }

    const handleCloseModal = (): void => {
        dispatch(closeModal())
    }

    return (
        <>
            <div className="modal">
                <div className="modal-content">
                    <div onClick={handleCloseModal} className="close-modal"> </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <div className="form-task-value">
                            <label htmlFor="task-value">Task</label>
                            <input
                                id="task-value"
                                type="text"
                                value={task.value}
                                onChange={e => setTask(prevState => ({
                                    ...prevState,
                                    value: e.target.value
                                }))}
                            />

                        </div>
                        <div className="form-task-date">
                            <label htmlFor="task-date">Date</label>
                            <input
                                id="task-date"
                                type="date"
                                onChange={e => setTask(prevState => ({
                                    ...prevState,
                                    date: e.target.value
                                }))}
                            />
                        </div>
                        <button className="button submit" type="submit" >Add Task</button>
                    </form>
                </div>
            </div>
        </>
    );
}

export default TaskModal;

