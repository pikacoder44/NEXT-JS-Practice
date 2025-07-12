import React from "react";
import Link from "next/link";
// API Call:
async function getUser(id) {
  let data = await fetch(`http://localhost:3000/api/users/${id}`);
  data = await data.json();
  return data;
}

const page = async ({ params }) => {
  const user = await getUser(params.userid);
  return (
    <div className="flex justify-center items-center flex-col  ">
      <h2 className=" text-7xl mb-2 text-blue-700 font-bold ">User Detail</h2>
      <div className=" text-2xl  ">
        <p>Name: {user.name}</p>
        <p>Age: {user.age}</p>

        <p>City: {user.city}</p>
      </div>

      {/* Button to go back */}
      <Link href="/users">
        <button className=" bg-blue-700 p-2 mt-5 rounded-md hover:cursor-pointer hover:bg-blue-900 ">
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default page;
