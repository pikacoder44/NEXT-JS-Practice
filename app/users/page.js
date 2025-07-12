import React from "react";
import Link from "next/link";
import DeleteUser from "../util/DeleteUser";
async function getUsers() {
  let data = await fetch("http://localhost:3000/api/users");
  data = await data.json();
  return data;
}

const page = async () => {
  const users = await getUsers();
  return (
    <div className="flex justify-center items-center flex-col">
      <h1 className="text-7xl  mb-2 text-blue-700 font-bold ">User List</h1>
      {users.map((item) => (
        <div key={item.id}>
          {/* Name of user  */}
          <span className="text-2xl hover:text-blue-500">
            <Link href={`users/${item.id}`}>{item.name}</Link>
          </span>
          {/* Edit Option  */}
          <span className="text-1.5xl text-gray-500 hover:text-green-300 font-stretch-125% ml-5">
            <Link href={`users/${item.id}/update`}>Edit</Link>
          </span>

          {/* Delete Option  */}
          <span className="text-1.5xl text-red-700 hover:text-red-800 font-stretch-125% ml-5">
            <DeleteUser id={item.id} />
          </span>
        </div>
      ))}
      {/* Button to add user */}
      <Link href="/adduser">
        <button className=" bg-blue-700 p-2 mt-5 rounded-md hover:cursor-pointer hover:bg-blue-900 ">
          Add User
        </button>
      </Link>
    </div>
  );
};

export default page;
