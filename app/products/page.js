import React from "react";
import Link from "next/link";
import Image from "next/image";
async function getproducts() {
  let data = await fetch("http://localhost:3000/api/products");
  data = await data.json();
  return data.data;
}

const page = async () => {
  const products = await getproducts();

  return (
    <div>
      <h1 className="text-7xl   mb-2 text-blue-700 font-bold ">Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((item) => {
          return (
            <div
              key={item._id}
              className="card p-6 bg-white border relative border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700"
            >
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {item.name}
              </h5>
              <h6>{item.company}</h6>

              <a
                href={`products/${item._id }`}
                className="text-white absolute top-8 left-70 overflow-hidden bg-blue-900 hover:bg-blue-400 hover:text-black  font-medium rounded-lg text-sm px-5 py-2.5 text-center "
              >
                Edit
              </a>

              <div className="flex items-center justify-between gap-3 mt-5">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                  Rs.{item.price}
                </span>
                <a
                  href="#"
                  className="text-black  bg-purple-300 hover:bg-purple-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
                >
                  Add to cart
                </a>
              </div>
            </div>
          );
        })}
      </div>
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
  );
};

export default page;
