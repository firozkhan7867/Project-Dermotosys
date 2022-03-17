import React from 'react'

const MakeAppointment = () => {
  return (
    <div className="container-fluid m-16 shadow-lg">
      <div className="bg-gray-50 px-2 lg:px-32 py-4">
      <h2 className="text-2xl text-center font-bold">MAKE AN APPOINTMENT</h2>
        <div className="border-b-4 h-8" style={{borderColor:"#3fbbc0"}}></div>
        <p className="text-lg text-center align-center font-normal my-4 mx-4">Before you book your first appointment, the doctor will need you to complete the form below.</p>
        <form >
        <div className="lg:grid lg:grid-cols-3 lg:justify-between flex-col mt-8">
          <input
            name="email"
            type="text"
            placeholder="Your Name"
            required
            className="border-b-2 w-auto bg-white rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4  text-black outline-none"
            />
            <input
            name="email"
            type="text"
            placeholder="Your Email"
            required
            className="border-b-2 bg-white rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4 text-black outline-none"
            />
            <input
            name="email"
            type="number"
            placeholder="Your PhoneNumber"
            required
            className="border-b-2 bg-white rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4 text-black outline-none"
            />
          <input
            name="email"
            type="date"
            placeholder="Date of Appointment"
            required
            className="border-b-2 bg-white rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4  text-black outline-none"
            />
            <select name="slot" className='border-b-2 bg-white rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4 text-black outline-none'>
                  <option className='px-2 py-2'>SLOTS Available</option>
                  <option className='px-2 py-2'>08:00 AM</option>
                  <option className='px-2 py-2'>09:00 AM</option>
                  <option className='px-2 py-2'>10:00 AM</option>
                  <option className='px-2 py-2'>11:00 AM</option>
                  <option className='px-2 py-2'>12:00 AM</option>
              </select>
            <select name="severity" className='border-b-2 bg-white rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4 text-black outline-none'>
                <option className='px-2 py-2'>--Select Severiety--</option>
                <option className='px-2 py-2'>General</option>
                <option className='px-2 py-2'>Normal</option>
                <option className='px-2 py-2'>Severe</option>
            </select>
        </div>
        <div className="mr-8">
        <input
            name="message"
            type="text"
            placeholder="Explain your Concern"
            className="border-b-2 w-full h-32 bg-white text-start rounded-2 text-sm py-3 px-2 my-2 rounded-1xl mx-4 text-black outline-none"
            />
        </div>
        <div className="justify-center">
        <button type="submit" className="text-2xl flex justify-center text-white hover:text-gray-500 ml-4 mt-4 mb-4 text-center rounded-lg px-3 py-2 font-bold bg-green-400 hover:bg-green-200">
          Submit Application</button>
        </div>
        </form>
       </div>
      </div>
  )
}

export default MakeAppointment