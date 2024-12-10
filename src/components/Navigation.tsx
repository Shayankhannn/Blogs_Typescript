import React from 'react'
import { FaSearch, FaUserCircle } from 'react-icons/fa'

const Navigation = () => {
  return (
    <nav className='flex justify-between items-center border-2 p-4 text-black border-gray-200'>
        <div className="flex items-center border-2 rounded-full px-4 py-2 max-w-md ml-[5rem]">
            <FaSearch className=' text-gray-600 mr-5 ' size={16}/>

            <input type="text" placeholder='Search...' className='bg-transparent w-full outline-none' />
        </div>

<section className="flex items-center mr-[5rem]">
    <FaUserCircle className='text-3xl mr-2'/>
</section>

    </nav>
  )
}

export default Navigation