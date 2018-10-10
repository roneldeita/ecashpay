import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'

const localizer = BigCalendar.momentLocalizer(moment)
//BigCalendar.setLocalizer(BigCalendar.momentLocalizer(moment))

export default ({schedules}) => {
  console.log(schedules)
  return (
    <BigCalendar
      localizer={localizer}
      selectable
      popup
      style={{ height: "75vh" }}
      events={schedules}
      views={['month', 'agenda']}/>
  )
}