import React, { useState } from 'react';
import './month.scss'
import {
    useParams,
    useHistory
} from "react-router-dom";
import { getDaysInMonth } from 'date-fns'
import SingleDay from '../SingleDay';
import { directionType } from '../../enums/enums';
import { formatDate } from '../../helpers/helpers'


const Month = () => {
    interface IDateUseParams {
        monthUrl: string,
        yearUrl: string
    }

    let { monthUrl, yearUrl }: IDateUseParams = useParams();
    const history = useHistory();
    const [date, setDate] = useState({
        month: Number(monthUrl),
        year: Number(yearUrl),
    })

    const { month, year } = date

    const daysInMonth = getDaysInMonth(new Date(year, month - 1))

    const daysArray = Array.from({ length: daysInMonth }, (value, index) => (
        {
            day: index + 1,
        }
    ));


    const changeMonth = (direction: directionType) => {
        let newMonth = month;
        let newYear = year;
        if (direction === directionType.NEXT) {
            if (newMonth === 12) {
                newMonth = 1
                newYear++
            } else {
                newMonth++
            }
        } else if (direction === directionType.PREVIOUS) {
            if (newMonth === 1) {
                newMonth = 12
                newYear--
            } else {
                newMonth--
            }
        }
        setDate({
            month: newMonth,
            year: newYear,
        })

        history.push(`/month/${newMonth}/${newYear}`)
    }


    return (
        <div className="month">
            <div className="buttons-date-container">
                <button className="button previous" onClick={() => changeMonth(directionType.PREVIOUS)}>
                    previous month
                </button>
                <div className="date-actual">{date.month} {date.year}</div>
                <button className="button next" onClick={() => changeMonth(directionType.NEXT)}>
                    next month
                </button>
            </div>
            <div className="days-container">
                {daysArray.map((item, index) => <SingleDay date={formatDate(item.day, month, year)} day={item.day} key={index} />)}
            </div>
        </div>
    );
}

export default Month;