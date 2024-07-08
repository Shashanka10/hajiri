"use client"
import React, { useEffect, useState } from 'react'
import AddNewStudent from './components/AddNewStudent'
import StudentTable from './components/StudentTable'

type GetStudents = {
  id: number,
  fullname: string,
  semester: string,
  contact: string,
  address: string
}

const getAllStudents = async (): Promise<GetStudents[]> => {
  const res = await fetch("/api/student", { cache: "no-store" });
  if (!res) {
      throw new Error("Something went wrong!!")
  }
  return res.json();
}

export default function Students() {

  const[studentList, setStudentList] = useState<GetStudents[]>([]);
  
  useEffect(() => {
    const fetchStudents = async () => {
        try {
            const data = await getAllStudents();
            setStudentList(data);
        } catch (error) {
            console.log(error)
        }
    };
    fetchStudents();
}, []);
  return (
    <div className='flex flex-col mt-6 space-y-5'>
      <h1 className='font-bold text-2xl flex justify-between'>Students<AddNewStudent /></h1>
      <div>
        <StudentTable 
          studentList={studentList}
          refreshData={getAllStudents}
        />
      </div>
    </div>
  )
}
