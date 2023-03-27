import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'
import { useSession, signIn, signOut } from 'next-auth/react'
import { useRecoilState } from 'recoil'
import { modalState } from '../atom/modalAtom'
import { useRouter } from 'next/router'

export default function Header() {
    const { data: session, status } = useSession()
    const [open , setOpen]   = useRecoilState(modalState)
    const router = useRouter()
    
  return (
    <div className='shadow-sm border-b sticky top=0 bg-white z-30'>
    <div className='flex items-center justify-between max-w-6xl mx-4 xl:mx-auto'>
        {/* Left */}
        <div className='cursor-pointer h-24 w-24 relative hidden lg:inline-grid'>
            <Image
             src={'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/800px-Instagram_logo.svg.png?20160616034027'}
             fill
             className='object-contain'
             alt='instagram word logo'
             onClick={() => router.push('/')}
            />
        </div>
        <div className='cursor-pointer h-24 w-10 relative lg:hidden '>
            <Image
             src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png'}
             fill
             className='object-contain'
             alt='instagram icon logo'
             onClick={() => router.push('/')}
            />
        </div>

        {/* Middle */}
        <div className='relative mt-1'>
            <div className='absolute top-2 left-2'>
                <MagnifyingGlassIcon className='h-5 text-gray-500'/>
            </div>
            <input type='text' placeholder='Search'
            className='bg-gray-50 pl-10 border-gray-500 text-sm
            focus:ring-black focus:border-black rounded-md'/>
        </div>


        {/* Right */}
        <div className='flex space-x-4 items-center'>
            <HomeIcon className='hidden md:inline-flex h-6 cursor-pointer hover:scale-125
            transition-transform duration-200 ease-out' 
            onClick={() => router.push('/')}/>
            {session?(
            <>
                <PlusCircleIcon onClick={() => setOpen(true)} className='h-6 cursor-pointer hover:scale-125
                transition-transform duration-200 ease-out' />
                <img onClick={signOut}
                src={session.user.image} 
                alt='user image' className='h-10 rounded-full cursor-pointer'
                />
            </>) : (
                <button onClick={signIn} className=''>Sign in</button>
            )
            }
        </div>
    </div>
    </div>
  )
}
