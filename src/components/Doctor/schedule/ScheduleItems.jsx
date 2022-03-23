import React from 'react'

const ScheduleItems = ({day,setStartVal,setEndVal,start,end}) => {
  return (
    <div>
        <div className="flex justify-between w-full">
            <div className="w-full">
              <h1 className='p-3'>Start Time</h1>
              <input type="time" name="start" className='px-4 py-2 rounded-md text-md w-10/12 border-2' value={start} onChange={e => setStartVal(e.target.value)} />
            </div>
            <div className="w-full">
              <h1 className='p-3'>End Time</h1>
              <input type="time" name="emd" className='px-4 py-2 rounded-md text-md w-10/12 border-2' value={end} onChange={e => setEndVal(e.target.value)} />
            </div>
            {/* <div className="w-4/12 text-center flex flex-col justify-center place-items-center">
                <div className=" bg-red-200 rounded-lg hover:cursor-pointer px-4 py-2 text-red-600" onClick={() => {
                  onSelect(id)
                }}>
                <RiDeleteBin6Fill  className='w-full h-[30px] '/>
                </div>
            </div> */}
        </div>
    </div>
  )
}



export default ScheduleItems;
