"useclient"
import React, { useEffect, useState } from 'react'
import { AgGridReact } from 'ag-grid-react';
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";
import { Button } from '@/components/ui/button';
import { SearchIcon, Trash } from 'lucide-react';
import { Input } from '@/components/ui/input';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { toast } from '@/components/ui/use-toast';

type DelStudents = {
  id: number,
  fullname: string,
  semester: string,
  contact: string,
  address: string
}

export default function StudentTable({ studentList, refreshData }:any) {

  const deleteRecord  = async(id: number): Promise<DelStudents[]> => {
    const res = await fetch(`/api/student/?id=${id}`, { 
      method: "DELETE",
      cache: "no-store" 
    });
    if (!res) {
        throw new Error("Something went wrong!!")
    }
    toast({
      title: "Record deleted successfully!",
      description: "You have deleted student record succcessfully.",
    });
    refreshData();
    return res.json();
  }

  const CustomButtons = (props:any)=>{
    return (
      <AlertDialog>
  <AlertDialogTrigger>
    <Button className='bg-red-700 rounded-lg'><Trash className='w-5 h-5'/></Button>
  </AlertDialogTrigger>
  <AlertDialogContent>
    <AlertDialogHeader>
      <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
      <AlertDialogDescription>
        This action cannot be undone. This will permanently delete your record
        and remove your data from our servers.
      </AlertDialogDescription>
    </AlertDialogHeader>
    <AlertDialogFooter>
      <AlertDialogCancel>Cancel</AlertDialogCancel>
      <AlertDialogAction
        className='bg-purple-800 hover:bg-purple-500 text-white'
        onClick={()=>deleteRecord(props?.data?.id)}
      >Continue</AlertDialogAction>
    </AlertDialogFooter>
  </AlertDialogContent>
</AlertDialog>
    )
  }
  const pagination = true;
  const paginationPageSize = 10;
  const paginationPageSizeSelector = [25, 50, 100];

  const[searchInput, setSearchInput] = useState<string | undefined>();
  const [colDefs, setColDefs] = useState([
    { field: "id"},
    // filter to search name 
    // { field: "fullname", filter: true },
    { field: "fullname"},
    { field: "address"},
    { field: "contact"},
    {field:"action", cellRenderer:CustomButtons}
  ]);

  const [rowData, setRowData] = useState();
  useEffect(() => {
    studentList && (
      setRowData(studentList)
    )
  }, [studentList])
  return (
      <div
        className="ag-theme-quartz h-[500px] space-y-2" // applying the Data Grid theme
      >
        <div className='flex w-[400px] bg-white relative shadow-sm border rounded-lg items-center'>
          <SearchIcon className='absolute right-5'/>
          <Input 
            className='border-none'
            type='text'
            placeholder='search anything...'
            onChange={(e)=>setSearchInput(e.target.value)}
          />
        </div>
        <AgGridReact
          rowData={rowData}
          columnDefs={colDefs}
          quickFilterText={searchInput}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          paginationPageSizeSelector={paginationPageSizeSelector}
        />
      </div>
  )
}
