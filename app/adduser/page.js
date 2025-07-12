"use client";
import React, { useState } from "react";
import Link from "next/link";
const Page = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [city, setCity] = useState("");

  const addUser = async () => {
    let response = await fetch("http://localhost:3000/api/users", {
      method: "Post",
      body: JSON.stringify({
        name,
        age,
        city,
      }),
    });
    response = await response.json();
    console.log(response);
    if (response.success) {
      alert("New User Created");
    } else {
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <h1 className="text-7xl  mb-2 text-blue-700 font-bold ">Add new User</h1>

      {/* Name Field  */}
      <input
        className="m-10 p-2 block "
        value={name}
        type="text"
        placeholder="Type name here..."
        onChange={(e) => setName(e.target.value)}
      />
      {/* Age Field  */}
      <input
        className="m-10 p-2 block [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
        type="number"
        placeholder="Age"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      {/* City Field  */}
      <input
        className="m-10  p-2 block "
        value={city}
        onChange={(e) => setCity(e.target.value)}
        type="text"
        placeholder="City"
      />
      <br />
      <Link href="/users">
        <button className=" bg-gray-700 p-2 mt-5 rounded-md hover:cursor-pointer hover:bg-black m-5">
          Back
        </button>
      </Link>
      <Link href="#">
        <button
          className="bg-green-700 p-2 mt-5 rounded-md hover:cursor-pointer hover:bg-green-900 "
          type="submit"
          onClick={addUser}
        >
          Add user
        </button>
      </Link>
    </div>
  );
};

export default Page;
