import React, { useEffect, useState } from 'react'
import minifaker from 'minifaker';
import 'minifaker/locales/en'
import Story from './Story';

export default function Stories() {
    const [storyUsers, setStoryUsers] = useState()
    
    useEffect(() => {
        const storyUsers = minifaker.array(20, i => (
            {
                username: minifaker.username({local: 'en'}),
                img: `https://i.pravatar.cc/150?img=${Math.floor(Math.random() * 70)}`,
            }
        ))
        setStoryUsers(storyUsers)
    }, [])
  return (
    <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200
    border overflow-x-scroll rounded-sm scrollbar-none'>
        {storyUsers && storyUsers.map(user => (
           <Story key={user.id} username={user.username} img={user.img}/> 
        ))}
    </div>
  )
}
