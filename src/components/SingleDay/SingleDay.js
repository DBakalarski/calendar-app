import React from 'react';
import './singleDay.scss'

import { shallowEqual, useSelector } from 'react-redux';


export interface TaskModalProps {
    day: number,
    date: string

}

const SingleDay: React.FC<TaskModalProps> = ({ day, date }) => {
    const tasks = useSelector(state => state.tasks.tasks.filter((item) => item.date === date), shallowEqual)

    return (
        <div className="single-day">
            <div>
                {day}
            </div>
            <div className="tasks-number">
                {tasks.length ?
                    <p>tasks: {tasks.length} </p>
                    : null}
            </div>
        </div>
    );
}

export default SingleDay;