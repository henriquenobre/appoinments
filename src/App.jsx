import { BiCalendar } from 'react-icons/bi'
import AddAppointment from './components/AddAppointment';
import Search from './components/Seach';
import AppointmentInfo from './components/AppointmentInfo';
import { useCallback, useEffect, useState } from 'react';

function App() {
  const [appointmentList, setAppointmentList] = useState([])

  const fetchData = useCallback(() => {
    fetch('./data.json')
    .then(response => response.json())
    .then(data => {
        setAppointmentList(data)
    })
  })

  useEffect(() => {
    fetchData()
  },[fetchData])

  return (
    <div className="App container nx-auto mt-3 font-thin">
      <h1 className="text-5xl mb-3"><BiCalendar className="inline-block text-red-400 aling-top" />My Appointments</h1>
      <AddAppointment />
      <Search />

      <ul className="divide-y divide-gray-200">
        {appointmentList
          .map(appointment => (
           <AppointmentInfo key={appointment.id}
           appointment={appointment} />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
