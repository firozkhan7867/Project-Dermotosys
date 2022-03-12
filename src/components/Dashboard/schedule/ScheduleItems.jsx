import React, { useState } from 'react'
import { RiDeleteBin6Fill} from "react-icons/ri";

const ScheduleItems = ({start,end, details,onSelect}) => {
  const [startval ,setStartVal] = useState(start);
  const [endval ,setEndVal] = useState(end);
  
  return (
    <div>
        <div className="flex justify-between w-full">
            <div className="w-full">
              <h1 className='p-3'>Start Time</h1>
              <select name="start" id="start" className='px-4 py-2 rounded-md text-md w-10/12 border-2 ' value={startval} onChange={e => setStartVal(e.target.value)}>
                  <option className='px-2 py-2'>08:00 AM</option>
                  <option className='px-2 py-2'>09:00 AM</option>
                  <option className='px-2 py-2'>10:00 AM</option>
                  <option className='px-2 py-2'>11:00 AM</option>
                  <option className='px-2 py-2'>12:00 AM</option>
              </select>
            </div>
            <div className="w-full">
              <h1 className='p-3'>End Time</h1>
              <select name="end" id="end" className=' px-4 py-2 rounded-md text-md w-10/12 border-2 ' value={endval} onChange={e => setEndVal(e.target.value)}>
                  <option className='px-2 py-2'>08:00 AM</option>
                  <option className='px-2 py-2'>09:00 AM</option>
                  <option className='px-2 py-2'>10:00 AM</option>
                  <option className='px-2 py-2'>11:00 AM</option>
                  <option className='px-2 py-2'>12:00 AM</option>
              </select>
            </div>
            <div className="w-4/12 text-center flex flex-col justify-center place-items-center pt-8">
                <div className=" bg-red-200 rounded-md hover:cursor-pointer px-2 py-1 text-red-600" onClick={onSelect}>
                <RiDeleteBin6Fill  className='w-full h-[20px] '/>
                </div>
            </div>
        </div>
    </div>
  )
}



export default ScheduleItems;
