import React from 'react'
import BigCalendar from 'react-big-calendar'
import moment from 'moment'

import 'react-big-calendar/lib/css/react-big-calendar.css'

BigCalendar.momentLocalizer(moment)

export default ({myEventsList}) => {
  console.log(moment().toDate())
  return (
    <BigCalendar
      style={{ height: "75vh" }}
      events={[
        {
          title: 'Schedule1 A',
          start: moment('2018-08-31 08:00:00').toDate(),
          end: moment('2018-08-31 09:00:00').toDate()
        },
        {
          title: 'Schedule1 B',
          start: moment('2018-08-31 08:00:00').toDate(),
          end: moment('2018-08-31 09:00:00').toDate(),
        },
        {
          title: 'Schedule1 C',
          start: moment('2018-08-31 08:00:00').toDate(),
          end: moment('2018-08-31 09:00:00').toDate()
        },
        {
          title: 'Schedule2',
          start: moment('2018-08-31 11:00:00').toDate(),
          end: moment('2018-08-31 12:00:00').toDate()
        },
        {
          title: 'Schedule2',
          start: moment('2018-08-31 14:00:00').toDate(),
          end: moment('2018-08-31 15:00:00').toDate()
        },
        {
          title: 'Schedule2',
          start: moment('2018-08-31 15:00:00').toDate(),
          end: moment('2018-08-31 16:00:00').toDate()
        }
      ]}
    />
  )
}