import React from 'react'
import ContactCard from './ContactCard'

const ContactList = ({contacts}) => {
  return (
    <div>
        <p className="mt-5 text-2xl font-semibold">Contact List</p>
         {contacts.map((contact) =>{
            return <ContactCard contact={contact}/>
         })}
    </div>
  )
}

export default ContactList