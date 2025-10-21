import React, { useEffect, useState } from 'react'
import './App.css';
import { IoWifiOutline } from "react-icons/io5";
import { IoMdBatteryCharging } from "react-icons/io";
import { FaSignal } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { MdRestartAlt } from "react-icons/md";
import { FaCamera } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";


const App = () => {
  const [count, setCount] = useState(0)
  const [time, setTime] = useState("")
  const [showContent, setShowContent] = useState(true)

  function doubleClick() {
    setShowContent(!showContent)
  }

  function add() {
    setCount(count + 1)
  }

  function subtract() {
    if (count < 1) {
      setCount(0)
    } else {
      setCount(count - 1)
    }
  }

  function reset() {
    setCount(0)
  }

  const now = new Date()
  const options = { day: "numeric", month: "long", year: "numeric" }
  const currentDate = now.toLocaleDateString("en-GB", options)


  useEffect(() => {
    function updateTime() {
      const currentTime = new Date()
      const hours = currentTime.getHours()
      const minutes = currentTime.getMinutes()
      const formatTime = `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}`

      setTime(formatTime)
    }
    updateTime();
    const timer = setInterval(updateTime, 1000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className='main bg-black flex gap-5 justify-center items-center w-full h-[100vh] '>
      {showContent ? (<div onDoubleClick={() => setShowContent(false)} className='body flex justify-between items-stretch p-3 w-[280px] h-[530px] rounded-3xl border-2  flex-col'>

        <div className='top flex justify-between w-full items-center'>
          <p className='text-white'>{time}</p>
          <div className='flex gap-1'>
            <FaSignal className='text-white' />
            <IoWifiOutline className='text-white' />
            <IoMdBatteryCharging className='text-white' />
          </div>
        </div>

        <div className='mb-20'>
          <h1 className='text-center text-white text-7xl'>{time}</h1>
          <h2 className='text-center text-white '>{currentDate} </h2>
        </div>

        <div className='bottom flex justify-between items-center '>
          <FaPhoneAlt className='text-white ' />
          <FaCamera className='text-white ' />
        </div>
      </div>)
        :
        (<div onDoubleClick={() => setShowContent(true)} className='flex counter justify-between items-stretch p-3 bg-black w-[280px] h-[530px] rounded-3xl border-2  flex-col'>
          <div className='top flex justify-between w-full items-center'>
            <p className='text-white'>{time}</p>
            <div className='flex gap-1'>
              <FaSignal className='text-white' />
              <IoWifiOutline className='text-white' />
              <IoMdBatteryCharging className='text-white' />
            </div>
          </div>
          <div className='center '>
            <h1 className='text-center text-white text-2xl'>Counter App</h1>
            <h2 className='text-center text-white text-9xl my-2'>{count} </h2>
            <div className='flex justify-center gap-3'>
              <button className='px-4 py-2 hover:bg-gray-700 rounded-lg border border-gray-300' onClick={add}><FaPlus className='text-white' /></button>
              <button className='px-4 py-2 hover:bg-gray-700 rounded-lg border border-gray-300 bg-black' onClick={reset}><MdRestartAlt className='size-5 text-white' /></button>
              <button className='px-4 py-2 hover:bg-gray-700 rounded-lg border border-gray-300' onClick={subtract}><FaMinus className='text-white' /></button>
            </div>
          </div>


          <div className='bottom flex justify-center '>
            <div className='w-[120px] h-[6px] bg-gray-700 rounded-full '>

            </div>
          </div>


        </div>)}






    </div>
  )
}

export default App

