"use client";

import React from "react";
const DeleteUser = (props) => {
  const userId = props.id;
  console.log(userId);

  const deleteUser =async ()=>{
    let result = await fetch(`http://localhost:3000/api/users/${userId}`,{
        method:"DELETE",

    })
    result =await result.json();
    if(result.success){
        alert("User Deleted Successfully")
    }
  }

  return (
    <span>
        <button onClick={deleteUser}>Delete</button>
  </span>
  );
};

export default DeleteUser;
