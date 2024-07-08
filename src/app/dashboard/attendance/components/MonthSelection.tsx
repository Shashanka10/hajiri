"use client"
import React, { useState } from 'react'
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from '@/components/ui/button'
import { CalendarDays } from 'lucide-react'
import { format } from "date-fns"
import { Calendar } from "@/components/ui/calendar"


export default function MonthSelection() {

    const [date, setDate] = useState<Date>()
    return (
        <div>
            <Popover>
                <PopoverTrigger asChild>
                    <Button
                        className='bg-purple-800 gap-2 text-white hover:bg-purple-700'
                    >
                        <CalendarDays className="mr-2 h-5 w-5" />
                        {date ? format(date, "PPP") : <span>Pick a date</span>}
                    </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                    />
                </PopoverContent>
            </Popover>
        </div >
    )
}
