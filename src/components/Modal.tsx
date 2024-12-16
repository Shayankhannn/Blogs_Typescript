import React, { FC, ReactNode } from 'react'

const Modal : FC<{children:ReactNode; onClose: ()=>void}> = ({children,onClose}) => {
  return (
    <div className='fixed inset-0 bg-black flex items-center  justify-center bg-opacity-50'>
        <div className=" bg-white p-4 rounded-lg shadow relative">
{children}

<button className='absolute top-2 right-2 text-gray-500' onClick={onClose}>X</button>
        </div>
    </div>
  )
}

export default Modal