import React,{ useState, useEffect} from 'react'
// import data from './upcoming.json'
// import presc from './today.json'

const Table = ({AppointmentData}) => {
    const [title, setTitle] = useState([]);
    
    const [data, setData] = useState([]);
    
    
    useEffect(() => {
        getsubjs()
    }, [AppointmentData]);
    const getsubjs = () =>{
        if (AppointmentData){
            if(AppointmentData.title){
                setTitle(AppointmentData.title);
            }
            if(AppointmentData.data){
                setData(AppointmentData.data);
            }
        }
    }
    // const [details,setDetails] = useState(data);
    // const [dd,setDd] = useState(d);
    // useEffect(() => {
    //     if (d === 1){
    //         setDetails(data);
    //        }
    //        else if(d === 2){
    //         setDetails(presc)
    //        }
    //   }, [d,dd]);
  return (
    <div class="bg-white   w-full">
        <div class="sm:-mx-8 px-4 sm:px-8 py-4 overflow-y-auto">
            <div class="inline-block min-w-full shadow overflow-hidden">
                <table class="min-w-full leading-normal text-center">
                <thead>
                        <tr>
                            {title.map((n) => (
                            <th
                                class="px-5 py-3 pr-20 border-b-2  border-gray-200 w-3/12 text-center text-sm  text-gray-700 uppercase tracking-wider">
                                {n}
                            </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((detail) => (
                            <tr>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                                    <div class="flex justify-center">
                                        <div class="flex-shrink-0 w-10 h-10">
                                            <img class="w-full h-full rounded-full"
                                                src={detail.url}
                                                alt="" />
                                        </div>
                                        <div class="ml-3">
                                            <p class="text-gray-900 whitespace-no-wrap">
                                                {detail.fullName}
                                            </p>
                                            <p  className="text-gray-500 text-left whitespace-no-wrap">
                                                {detail.id}    
                                            </p>
                                        </div>
                                    </div>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm pr-20 align-begin">
                                    <p class="text-gray-900 whitespace-no-wrap">{detail.apptdate}</p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm pr-20">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                    {detail.purpose}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm pr-20">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {detail.type}
                                    </p>
                                </td>
                                <td class="px-5 py-5 border-b border-gray-200 bg-white text-sm pr-20">
                                    <p class="text-gray-900 whitespace-no-wrap">
                                        {detail.status}
                                    </p>
                                </td>
                            </tr>
                        ))}
                        
                    </tbody>
                </table>
            </div>
        </div>
    </div>
  )
}

export default Table