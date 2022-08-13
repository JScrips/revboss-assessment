import React, { useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import startOfWeek from 'date-fns/startOfWeek'
import getDay from 'date-fns/getDay'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import 'react-datepicker/dist/react-datepicker.css'
import AddAvailability from './AddAvailability'

const locales = {
  'en-US': require('date-fns/locale/en-US')
}
const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales
})

const CalendarComponent = () => {
  const [newEvent, setNewEvent] = useState({
    title: '',
    start: '',
    end: ''
  })
  const [allEvents, setAllEvents] = useState(
    []
    //This segment of the code is to save your data to the local storage to get pseudo persistence of your dates.
    // It's entirely possible to hook up the app to a database that can store all of the dates and then fetch them inside of a useState or useEffect to hydrate the app upon load.
    // JSON.parse(localStorage.getItem('availablePeriods')) === null
    //   ? [
    //       {
    //         title: 'Terrance Available',
    //         start: new Date('august 12 2022 17:00'),
    //         end: new Date('august 12 2022 18:00')
    //       }
    //     ]
    //   : JSON.parse(localStorage.getItem('availablePeriods'))
  )
  const [showAddAvail, setShowAddAvail] = useState(false)

  const handleAddEvent = () => {
    setAllEvents([...allEvents, newEvent])

    //More local storage code.
    // localStorage.setItem('availablePeriods', JSON.stringify(allEvents))
  }

  return (
    <div className="">
      <h1 className="text-5xl text-center mt-20"> Calendar </h1>
      <Calendar
        localizer={localizer}
        events={allEvents}
        startAccessor="start"
        endAccessor="end"
        selectable={true}
        defaultView="week"
        style={{ height: 1000, margin: '50px' }}
      />
      <div className="flex flex-col items-center gap-10">
        {showAddAvail ? (
          <AddAvailability
            newEvent={newEvent}
            setNewEvent={setNewEvent}
            handleAddEvent={handleAddEvent}
            setShowAddAvail={setShowAddAvail}
          />
        ) : (
          ''
        )}

        <div className="flex justify-center gap-10">
          {showAddAvail ? (
            ''
          ) : (
            <button
              onClick={() => setShowAddAvail(true)}
              className="border-2 py-3 px-8 rounded-full text-xl border-orange-600 text-orange-600 font-medium hover:bg-orange-500 hover:text-white">
              {' '}
              Add Availability
            </button>
          )}
          <button
            onClick={() => console.log(allEvents)}
            className="hover:bg-orange-600 hover:text-white border-2 py-3 px-8 rounded-full text-xl border-orange-600 text-orange-600 font-medium">
            {' '}
            Log Current Availability
          </button>
        </div>
      </div>
    </div>
  )
}

export default CalendarComponent
