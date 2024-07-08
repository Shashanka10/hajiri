import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function ProfileDetail({user}) {
  return (
    <div className='flex space-x-5 items-center'>
        <div>
            <h1 className='text-3xl font-semibold'>{user.name}</h1>
            <h2>{user.email}</h2>
        </div>
        <div>
            <Link href={user.image || "https://github.com/shadcn.png"}>
                <div className='rounded-full h-20 w-20 overflow-hidden '>
                    <Image 
                        className='object-contain'
                        src={user.image || "https://github.com/shadcn.png"}
                        alt={user.name || "user profile image"}
                        width={100}
                        height={100}
                        priority={true}
                    />
                </div>
            </Link>
        </div>
    </div>
  )
}
