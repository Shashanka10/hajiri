import React from 'react'
import MonthSelection from './components/MonthSelection'

export default function Attendance() {
  return (
    <div className='flex flex-col mt-6 space-y-5'>
    <h1 className='font-bold text-2xl flex justify-between'>Attendance</h1>
    <div>
      <MonthSelection />
    </div>
  </div>
  )
}
