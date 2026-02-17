import { useState } from 'react';
import { buildCalendar } from '../../utilities/calendar/buildCalendar.utilitie'
import './Calendar.scss'

type CalendarProps = {
  currentDate: Date;
  setCurrentDate: React.Dispatch<React.SetStateAction<Date>>
  onSelectDate?: (date: Date) => void
}

function isSameYMD(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

export default function Calendar({currentDate, setCurrentDate, onSelectDate}: CalendarProps){
  console.log('Calendar mounted');
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const month = currentDate.getMonth();
  const year = currentDate.getFullYear();
  const days = buildCalendar(year, month);
  const today = new Date();

  const monthName = currentDate.toLocaleString('en-GB', {month: 'long'});

  function handleDayByClick(day: number) {
    const clickedDate = new Date(year, month, day);
    setSelectedDate(clickedDate);
    onSelectDate?.(clickedDate)
  }

  function goToPrevMonth() {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  function goToNextMonth() {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  return (
    <div>
      <button type='button' onClick={goToPrevMonth}>prev</button>
      <button type='button' onClick={goToNextMonth}>next</button>
      <p>Year: {year}</p>
      <p>Month name: {monthName}</p>

      <div className='calendar__days'>
        {days.map((day, index) => {
          if (day === null) {
            return (<p key={index}></p>)
          }

          const cellDay = new Date(year, month, day);
          const isToday = isSameYMD(cellDay, today);
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


