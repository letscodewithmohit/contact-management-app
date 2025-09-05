import React from 'react'
import { MdContacts, MdDelete } from 'react-icons/md'

const ContactCard = ({contact}) => {
  return (
    <div className='border my-4  px-4 py-2 flex justify-between items-center'>
   <MdContacts className="text-blue-600 text-2xl" />
       <div className='flex flex-col gap-2'>
        <p className='text-black font-semibold'>Name : {contact.name} </p>
        <p className='text-blue-900 font-semibold'>Email : {contact.email}</p>
       </div>
        
         <MdDelete className="text-red-600 text-2xl" />

    </div>
  )
}

export default ContactCard