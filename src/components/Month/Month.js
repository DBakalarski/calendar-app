import React, { useState } from 'react';
import './month.scss'
import {
    useParams,
    useHistory
} from "react-router-dom";
import { getDaysInMonth, format } from 'date-fns'
import SingleDay from '../SingleDay';

const Month = () => {
    interface IUseParams {
        monthUrl: string,
        yearUrl: string
    }

    let { monthUrl, yearUrl }: IUseParams = useParams();
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


    const previousMonth = () => {
        let newMonth = month;
        let newYear = year;
        if (newMonth === 1) {
            newMonth = 12
            newYear--
        } else {
            newMonth--
        }

        setDate({
            month: newMonth,
            year: newYear,
        })

        history.push(`/month/${newMonth}/${newYear}`)
    }

    const nextMonth = () => {
        let newMonth = month;
        let newYear = year;
        if (newMonth === 12) {
            newMonth = 1
            newYear++
        } else {
            newMonth++
        }

        setDate({
            month: newMonth,
            year: newYear

        })

        history.push(`/month/${month}/${year}`)
    }

    const formatDate = (day: number) => {
        return format(new Date(year, month - 1, day), 'yyyy-MM-dd');
    }


    return (
        <div className="month">
            <div className="buttons-date-container">
                <button className="button previous" onClick={previousMonth}>
                    previous month
                </button>
                <div className="date-actual">{date.month} {date.year}</div>
                <button className="button next" onClick={nextMonth}>
                    next month
                </button>
            </div>

            <div className="days-container">
                {daysArray.map((item, index) => <SingleDay date={formatDate(item.day)} day={item.day} key={index} />)}
            </div>
        </div>
    );
}

export default Month;