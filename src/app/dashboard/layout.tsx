import SideNav from '@/components/SideNav'
import Header from '@/components/Header'
import React, { ReactNode } from 'react'

export default function layout({ children }: {children: ReactNode}) {
    return (
        <div className='flex justify-between min-h-screen p-5 pb-0 z-20 w-full'>
            <div className='flex ml-5'>
                <SideNav />
            </div>
            <div className='mr-5 w-full ml-8'>
                <Header />
                {children}
            </div>
        </div>
    )
}
