"use client";
import React, { useState, use, useEffect } from "react";
import Link from "next/link";
const Page = ({ params }) => {
  const { userid } = use(params);

  //USe state:
  const [name, setName] = useState("");
  const [age, setAge] = useState("");

  const [city, setCity] = useState("");

  // API Call:
  useEffect(() => {
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    let data = await fetch(`http://localhost:3000/api/users/${userid}`);
    data = await data.json();
    setName(data.name);
    setAge(data.age);
    setCity(data.city);
  };

  const updateUser = async () => {
    console.log(name, age, city, userid);

    let result = await fetch(`http://localhost:3000/api/users/${userid}`, {
      method: "PUT",
      body: JSON.stringify({ name, age, city }),
    });
    result = await result.json();
    console.log(result);
  
    if(result.success==true){
      alert("User Updated Successfully")
    }else{
      alert("Invalid parameters")
    }

  };

  return (
    <div>
      <h2 className="text-7xl mb-2 text-blue-700 font-bold">Update user</h2>

      <form className="max-w-sm mx-auto">
        <div className="mb-5">
          {/* Name Field  */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Name
          </label>
          <input
            type="text"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          {/* Age Field  */}
          <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
            Age
          </label>
          <input
            type="number"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500[-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
            value={age}
            onChange={(e) => setAge(e.target.value)}
          />
        </div>

        {/* City Field  */}
        <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
          City
        </label>
        <input
          type="text"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />

        {/* Button to Update user */}
        <Link href="/users">
          <button
            type="submit"
            className=" bg-blue-700 p-2 mt-5 rounded-md hover:cursor-pointer hover:bg-blue-900 "
            onClick={updateUser}
          >
            Update
          </button>
        </Link>
      </form>
    </div>
  );
};

export default Page;
