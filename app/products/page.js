import React from "react";
import Link from "next/link";
import Image from "next/image";
import Delete from "../component/Delete";
async function getproducts() {
  let data = await fetch("http://localhost:3000/api/products");
  data = await data.json();
  return data.data;
}

const page = async () => {
  const products = await getproducts();

  

  return (
    <div className="flex justify-center flex-col content-center">
      <h1 className="text-7xl   mb-2 text-blue-700 font-bold text-center ">
        Products
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => {
          return (
            <div
              key={item._id}
              className="card p-6 border-solid border-5 bg-white  relative border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
              <h6 className="text-sm text-gray-600 dark:text-gray-300">
                {item.company}
              </h6>

              <div className="mt-4 text-3xl font-bold text-gray-900 dark:text-white">
                Rs.{item.price}
              </div>

              <div className="flex gap-3 mt-4">
                <a
                  href={`products/${item._id}`}
                  className="text-white bg-zinc-900 hover:bg-white hover:text-black font-medium rounded-lg text-sm px-5 py-2.5"
                >
                  Edit
                </a>
                <Delete id={item._id} />
              </div>
            </div>
          );
        })}
      </div>
      <div className=" flex justify-center flex-row content-center">
        <Link href="/">
          <button className=" bg-gray-700 p-2 mt-5 rounded-md hover:cursor-pointer hover:bg-black m-5">
            Back
          </button>
        </Link>
        <Link href="/addproduct">
          <button
            className="bg-green-700 p-2 mt-5 rounded-md hover:cursor-pointer hover:bg-green-900 "
            type="submit"
          >
            Add Product
          </button>
        </Link>
      </div>
    </div>
  );
};

export default page;
