import React from 'react'
import { EllipsisHorizontalIcon, HeartIcon, ChatBubbleOvalLeftEllipsisIcon, BookmarkIcon, FaceSmileIcon } from '@heroicons/react/24/outline'
import { useSession } from 'next-auth/react'

export default function Post({ img, userImg, caption, username, id}) {
    const { data: session } = useSession()
  return (
    <div key={id} className='bg-white my-7 border rounded-md'>
        {/* Post Header */}
        <div className='flex items-center p-5'>
            <img src={userImg} alt={username}
            className='h-12 rounded-full object-cover border p-1
            mr-3' />
            <p className='font-bold flex-1'>{username}</p>
            <EllipsisHorizontalIcon className='h-5' /> 
        </div>

        {/* Post Image */}
        <img src={img} alt={caption} className='object-cover w-full' />

        {/* Post buttons */}
        {session && (
            <div className='flex justify-between px-4 pt-14'>
            <div className='flex space-x-4'>
                <HeartIcon className='btn'/>
                <ChatBubbleOvalLeftEllipsisIcon className='btn' />
            </div>
            <BookmarkIcon className='btn' />
        </div>
        )}
        

        {/* Post Comments */}
        <p className='p-5 truncate'>
            <span className='font-bold mr-2'>{username}</span>
        {caption}</p>

        {/* Post Comment input */}
        {session && (
            <form className='flex items-center p-4'>
            <FaceSmileIcon className='h-7'/>
            <input type='text' placeholder='Enter comment here' 
            className='border-none flex-1 focus:ring-0'/>
            <button className='text-blue-400 font-bold'>Post</button>
        </form>
        )}
        
    </div>

  )
}
