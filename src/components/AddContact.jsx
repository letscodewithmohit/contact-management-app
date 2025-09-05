import React, { useState } from "react";

const AddContact = ({handleAddContact}) => {
 const [formData, setFormData] = useState({name : "", email : ""})

//  handleChange function

function handleChange(e){
  const {name,value} = e.target;
  setFormData({
    ...formData, [name]:value
  })
}

function Add(e){
e.preventDefault();
if(formData.name === "" || formData.email === ""){
 alert("Both fileds required!!")
}else{

  handleAddContact(formData);
  setFormData({
    name : "", email : ""
  })
}
}

  return (
    <>
      <p className="mt-5 text-2xl font-semibold">Add Contact</p>

      <form className="mt-3 flex flex-col  gap-5" onSubmit={Add}>
        <div className="flex flex-col ">
          <label htmlFor="name" className="text-lg font-medium"> Name </label>
          <input type="text" id="name" className="py-2 px-2 border border-gray-400" placeholder="name" name="name" value={formData.name} onChange={handleChange}/>
        </div>

         <div className="flex flex-col ">
          <label htmlFor="email"  className="text-lg font-medium"> Email </label>
          <input type="email" id="email" className="py-2 px-2 border border-gray-400"placeholder="email" name="email" value={formData.email} onChange={handleChange}/>
        </div>

      <div>
      <button className="bg-blue-900 py-3 px-10 text-white font-semibold rounded-sm cursor-pointer">Add</button>
      </div>
      </form>
    </>
  );
};

export default AddContact;
