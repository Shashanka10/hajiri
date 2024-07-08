"use client"
import { Button } from '@/components/ui/button'
import { SubmitHandler, useForm } from "react-hook-form"
import React, { useEffect, useState } from 'react'

import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { addStudentSchema, addStudentType } from '@/lib/schema/addstudent';
import { zodResolver } from '@hookform/resolvers/zod'
import { useToast } from '@/components/ui/use-toast'
import { LoaderCircle } from 'lucide-react'

type AddSemester = {
    id: number,
    semester: string,
}
type AddStudent = {
    id: number,
    fullname: string,
    semester: string,
    contact: string,
    address: string
}

const getGradesData = async (): Promise<AddSemester[]> => {
    const res = await fetch("/api/grade", { cache: "no-store" });
    if (!res) {
        throw new Error("Something went wrong!!")
    }
    return res.json();
}
const createStudents = async (data: addStudentType): Promise<AddStudent[]> => {
    const res = await fetch("/api/student", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });
    if (!res) {
        throw new Error("Something went wrong!!")
    }
    return res.json();
}

export default function AddNewStudent() {

    const { toast } = useToast();
    const [open, setOpen] = useState<boolean>(false);
    const [grades, setGrades] = useState<AddSemester[]>([]);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        const fetchGrades = async () => {
            try {
                const data = await getGradesData();
                setGrades(data);
            } catch (error) {
                console.log(error)
            }
        };
        fetchGrades();
    }, []);

    const form = useForm<addStudentType>({
        resolver: zodResolver(addStudentSchema)
    })

    const onSubmit: SubmitHandler<addStudentType> = async(data) => {
        setLoading(true);
        try {
            await createStudents(data);
            toast({
                title: "Added Successfully",
                description: "A new student has been added successfully!!"
            })
            console.log(data)
            form.reset();
            setLoading(false);
            setOpen(false);
        } catch (error) {
            console.log(error);
            setLoading(false)
            toast({
                title: "Error",
                description: "An error occurred while adding the student."
            });
        }
    }
    return (
        <div>
            <Dialog open={open} onOpenChange={setOpen}>
                <Button
                    className='bg-purple-800 text-white'
                    onClick={() => setOpen(true)}
                >+ Add New Student</Button>
                <DialogContent className="sm:max-w-[425px] md:max-w-[500px] bg-slate-100">
                    <DialogHeader className='flex items-center'>
                        <DialogTitle className='text-2xl'>Add New Student</DialogTitle>
                        <DialogDescription>
                            Add a new student in your attendance list.
                        </DialogDescription>
                    </DialogHeader>
                    <>
                        <Form {...form}>
                            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                                <FormField
                                    control={form.control}
                                    name="fullname"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Full Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="enter your name"
                                                    className="h-[40px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="semester"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Select Semester</FormLabel>
                                            <FormControl>
                                                <Select
                                                    onValueChange={field.onChange}
                                                    defaultValue={field.value}
                                                >
                                                    <SelectTrigger className="w-full">
                                                        <SelectValue
                                                            placeholder="Select Semester"
                                                        />
                                                    </SelectTrigger>
                                                    <SelectContent>
                                                            {grades.map((item) => (
                                                                <SelectItem key={item.id} value={item.semester}>{item.semester}</SelectItem>
                                                            ))}
                                                    </SelectContent>
                                                </Select>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="contact"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Contact Number</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="enter your phone number"
                                                    className="h-[40px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Address</FormLabel>
                                            <FormControl>
                                                <Input
                                                    placeholder="enter your address"
                                                    className="h-[40px]"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <Button
                                    className='bg-purple-800 hover:bg-purple-500 text-white w-full'
                                    type='submit'
                                >{loading ? <LoaderCircle className='animate-spin'/>:"Save changes"}
                                </Button>
                            </form>
                        </Form>
                    </>
                    <DialogFooter>
                        <DialogClose asChild>
                            <Button 
                                type='button'
                                className='bg-purple-800 hover:bg-purple-500 text-white w-full'>
                                Cancel
                            </Button>
                        </DialogClose>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </div>
    )
}