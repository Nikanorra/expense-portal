function getMonthDays(year: number, month: number) {
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfWeek = new Date(year, month, 1).getDay();

  return {daysInMonth, firstDayOfWeek}
}

export function buildCalendar(year: number, month: number) {
  const calendar = [];
  const { daysInMonth, firstDayOfWeek } = getMonthDays(year, month);

  for (let i = 0; i < 42; i++) {
    const dayNumber = i - firstDayOfWeek + 1;
    if (dayNumber < 1 || dayNumber > daysInMonth) {
      calendar.push(null)
    } else {
      calendar.push(dayNumber)
    }
  }
  return calendar;
}