import React, {  MouseEvent, ReactNode } from 'react'

const Modal : React.FC<{children:ReactNode; onClose: ()=>void}> = ({children,onClose}) => {
  
  const handleOverlayClick = (e:MouseEvent<HTMLDivElement>)=>{
if(e.target === e.currentTarget){
  onClose();
  }}
  
  return (
    <div className='fixed inset-0 bg-black flex items-center  justify-center bg-opacity-50' onClick={handleOverlayClick}>
        <div className=" bg-white p-4 rounded-lg shadow relative">
{children}

<button className='absolute top-2 right-4 text-xl font-bold text-gray-500' onClick={onClose}>X</button>
        </div>
    </div>
  )
}

export default Modal