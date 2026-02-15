import { useState } from 'react';
import { buildCalendar } from '../../utilities/calendar/buildCalendar.utilitie'
import './Calendar.scss'

function isSameYMD(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}


export default function Calendar(){
  const [currentDate, setCurrentDate] = useState(new Date());
  const [selectedDate, setSelectedDate] = useState<Date | null>(null)


  // const today = new Date();
  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const days = buildCalendar(year, month);

  const monthName = currentDate.toLocaleString('en-GB', {month: 'long'});

  function handleDayByClick(day: number) {
    const clickedDate = new Date(year, month, day);
    setSelectedDate(clickedDate);
  }

  return (
    <div>
      <p>Year: {year}</p>
      <p>Month name: {monthName}</p>

      <div className='calendar__days'>

        {days.map((day, index) => {
          if (day === null) {
            return (<p key={index}></p>)
          }

          const cellDay = new Date(year, month, day);
          const isToday = isSameYMD(cellDay, currentDate);
          const isSelected = selectedDate && isSameYMD(cellDay, selectedDate);
          console.log(isSelected);

          return (
            <p key={index} className={`${isToday ? 'day today' : 'day'} ${isSelected ? 'day selected' : 'day'}`}
            onClick={() => handleDayByClick(day)}
            >{day}</p>
          )
        })}
      </div>
    </div>
  )
}


