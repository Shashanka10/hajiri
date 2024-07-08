import React from 'react'
import { auth } from '@/auth'
import { redirect } from 'next/navigation'
import ProfileDetail from './components/Profile'

export default async function Profile() {
  const session = await auth()

  if(!session?.user){
    redirect("/api/auth/signin")
  }
  return (
    <div className='z-20 flex justify-center items-center'>
      <div>
      <h1>Profile Page</h1>
      <h2>
        <ProfileDetail user={session.user}/>
      </h2>
      </div>
      <div>

      </div>
    </div>
  )
}
