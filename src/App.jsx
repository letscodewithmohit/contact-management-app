
import { useState } from "react"
import AddContact from "./components/AddContact"
import ContactList from "./components/ContactList"
import Header from "./components/Header"



function App() {

const [contacts, setContacts] = useState([]);

function handleAddContact(contact){
setContacts([...contacts,contact])


}
  return (
    <div>
   <Header/>
   <AddContact handleAddContact= {handleAddContact}/>
   <ContactList contacts = {contacts}/>
    </div>
  )
}

export default App

