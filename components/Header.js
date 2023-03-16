import Image from 'next/image'
import React from 'react'
import { MagnifyingGlassIcon, PlusCircleIcon } from '@heroicons/react/24/outline'
import { HomeIcon } from '@heroicons/react/24/solid'

export default function Header() {
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
            />
        </div>
        <div className='cursor-pointer h-24 w-10 relative lg:hidden '>
            <Image
             src={'https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Instagram-Icon.png/1200px-Instagram-Icon.png'}
             fill
             className='object-contain'
             alt='instagram icon logo'
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
            transition-transform duration-200 ease-out' />
            <PlusCircleIcon className='h-6 cursor-pointer hover:scale-125
            transition-transform duration-200 ease-out' />
            <img src='https://pyxis.nymag.com/v1/imgs/7b3/8ee/2f39dd057938055919d3822868da282c5f-halle-bailey.rsquare.h600.jpg' 
            alt='user image' className='h-10 rounded-full cursor-pointer'
            />
        </div>
    </div>
    </div>
  )
}
