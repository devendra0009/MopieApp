import { useRouter } from 'next/router'
import React from 'react'
import request from '../utils/request'

function Nav() {
  const router=useRouter()
  return (
    <nav className='relative'>
    <div className='flex px-10  sm:px-20 whitespace-nowrap text-white space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide'>
        {
          Object.entries(request).map(([key,{title,url}])=>(
            <h2 key={key} onClick={()=>router.push(`?genre=${key}`)} className='cursor-pointer transition duration-100 transform hover:scale-125 hover:text-blue-300 active:text-blue-500'>
            {/* the router.push(`/?genre=${key}`) is must to get this slug while server-side rendering */}
              {title}
            </h2>
          ))
        }
    </div>
    {/* to position it wrt to parent nav container */}
    <div className='absolute top-0 right-0 bg-gradient-to-l from-[#06202A] h-10 w-1/12 lg:w-0'/>
    </nav>
  )
}

export default Nav