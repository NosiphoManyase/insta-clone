import React, { useEffect, useState } from 'react'
import minifaker from 'minifaker';
import 'minifaker/locales/en'
import Story from './Story';
import { useSession } from 'next-auth/react';

export default function Stories() {
    const {data: session} = useSession();
    const [storyUsers, setStoryUsers] = useState()
    
    useEffect(() => {
        const storyUsers = minifaker.array(20, i => (
            {
                username: minifaker.username({local: 'en'}),
                img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
                id: i,
            }
        ))
        setStoryUsers(storyUsers)
    }, [])
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200
    border overflow-x-scroll rounded-sm scrollbar-none'>
        {session && <Story img={session.user.image} username={session.user.username} isUser='true'/>}
        {storyUsers && storyUsers.map(user => (
           <Story key={user.id} username={user.username} img={user.img}/> 
        ))}
    </div>
  )
}
