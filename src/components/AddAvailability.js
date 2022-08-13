import React from 'react'
import Datepicker from 'react-datepicker'

const AddAvailability = ({ newEvent, setNewEvent, handleAddEvent, setShowAddAvail }) => {
  const convertDate = (event, time, order) => {
    let date = event[order]
    date.setHours(Number(time))
    setNewEvent({ ...newEvent, [order]: date })
  }

  return (
    <div className="bg-orange-600 p-16 rounded-2xl w-5/12 xl:w-fit">
      <h2 className="text-center mb-8 text-white text-2xl font-medium tracking-wide">
        {' '}
        Please Select Availability
      </h2>
      <div className="flex gap-6 items-center flex-col xl:flex-row ">
        <input
          type="text"
          placeholder="Add Title"
          value={newEvent.title}
          className="p-1 border border-black text-orange-600 placeholder-orange-600 rounded-lg focus:ring-orange-600 focus:ring-1 focus:outline-none focus:border-orange-600"
          onChange={e => setNewEvent({ ...newEvent, title: e.target.value })}
        />
        <Datepicker
          placeholderText="Start Date"
          selected={newEvent.start}
          onChange={start => setNewEvent({ ...newEvent, start })}
          className="p-1 border border-black text-orange-600 placeholder-orange-600 rounded-lg focus:ring-orange-600 focus:ring-1 focus:outline-none focus:border-orange-600"
          filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
          isClearable
          withPortal
        />
        <Datepicker
          placeholderText="End Date"
          selected={newEvent.end}
          onChange={end => setNewEvent({ ...newEvent, end })}
          className="p-1 border border-black text-orange-600 placeholder-orange-600 rounded-lg focus:ring-orange-600 focus:ring-1 focus:outline-none focus:border-orange-600"
          isClearable
          filterDate={date => date.getDay() !== 6 && date.getDay() !== 0}
          withPortal
        />
        <select
          onChange={e => convertDate(newEvent, e.target.value, 'start')}
          className="p-1 border border-black text-orange-600 placeholder-orange-600 rounded-lg focus:ring-orange-600 focus:ring-1 focus:outline-none focus:border-orange-600">
          <option> Select Time</option>
          <option value={9}>9 AM</option>
          <option value={10}>10 AM</option>
          <option value={11}>11 AM</option>
          <option value={12}>12 PM</option>
          <option value={13}>1 PM</option>
          <option value={14}>2 PM</option>
          <option value={15}>3 PM</option>
          <option value={16}>4 PM</option>
          <option value={17}>5 PM</option>
        </select>
        <span className="text-white font-semibold"> to </span>
        <select
          onChange={e => convertDate(newEvent, e.target.value, 'end')}
          className="p-1 border border-black text-orange-600 placeholder-orange-600 rounded-lg focus:ring-orange-600 focus:ring-1 focus:outline-none focus:border-orange-600">
          <option> Select Time</option>
          <option value={9}>9 AM</option>
          <option value={10}>10 AM</option>
          <option value={11}>11 AM</option>
          <option value={12}>12 PM</option>
          <option value={13}>1 PM</option>
          <option value={14}>2 PM</option>
          <option value={15}>3 PM</option>
          <option value={16}>4 PM</option>
          <option value={17}>5 PM</option>
        </select>

        <button
          className="hover:bg-yellow-500 hover:text-white border-2 py-1 px-2 rounded-full text-xl border-white text-white font-medium"
          onClick={handleAddEvent}>
          {' '}
          Submit{' '}
        </button>
      </div>
      <div className="flex justify-center mt-10 text-xl">
        <button
          onClick={() => setShowAddAvail(false)}
          className="hover:bg-yellow-500 hover:text-white border-2 py-1 px-2 rounded-full text-xl border-white text-white font-medium">
          {' '}
          Close{' '}
        </button>
      </div>
    </div>
  )
}

export default AddAvailability
