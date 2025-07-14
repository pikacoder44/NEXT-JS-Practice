"use client";
import React, { useState } from "react";
import Link from "next/link";
const Page = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  const clearInput = async () => {
    setName("");
    setPrice("");
    setCompany("");
    setColor("");
    setCategory("");
  };

  // Add Function:
  const addProduct = async () => {
    console.log(name, color, price, company, category);
    const payload = {
      name: name,
      price: price,
      company: company,
      color: color,
      category: category,
    };
    let result = await fetch("http://localhost:3000/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json", // Tells the server to parse body as JSON
      },
      body: JSON.stringify(payload),
    });
    result = await result.json();
    if (result.success) {
      alert("New Product Added");
    } else {
      alert("Something Went Wrong");
    }
  };
  return (
    <div className=" flex justify-center items-center flex-col  ">
      <h1 className="text-7xl  mb-2 text-secondary font-bold  hover:text-blue-800 hover:cursor-default">
        Add Products
      </h1>
      <div className=" flex flex-col ">
        <div className=" flex flex-row ">
          <input
            className=" m-6 p-2 "
            type="text"
            placeholder="Enter Product Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            className="m-6 p-2  [-moz-appearance:_textfield] [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none "
            type="number"
            placeholder="Enter Product Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </div>
        <div className=" flex flex-row ">
          <input
            className="m-6 p-2  "
            type="text"
            placeholder="Enter Product Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />
          <input
            className="m-6 p-2  "
            type="text"
            placeholder="Enter Product Color"
            value={color}
            onChange={(e) => setColor(e.target.value)}
          />
        </div>
        <div className=" flex flex-col items-center justify-center ">
          <input
            className="m-6 p-2 text-center  content-center inline  "
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <label
            htmlFor="file_input"
            className="block mb-2 text-sm font-medium text-gray-200"
          >
            Upload file
          </label>
          <input
            id="file_input"
            type="file"
            className="block w-full text-sm  text-gray-300 file:mr-4 file:py-2 file:px-4
             file:rounded-lg file:border-0
             file:text-sm file:font-semibold
             file:bg-gray-700  file:text-white
             hover:file:bg-orange-700
             file:cursor-pointer
             bg-gray-800 rounded-lg"
          />
          <div className=" flex flex-row ">
            <Link href="/products">
              <button className=" bg-gray-700 p-3 mt-5 rounded-md hover:cursor-pointer hover:bg-black m-5">
                Back
              </button>
            </Link>
            <button
              className=" bg-gray-800 p-3 mt-5 rounded-md hover:cursor-pointer hover:bg-black m-5"
              onClick={clearInput}
            >
              Clear
            </button>
            <Link href={"/products"}>
              <button
                onClick={addProduct}
                className="bg-secondary p-2 mt-5 mb-5 rounded-md hover:cursor-pointer hover:bg-third hover:text-white   "
              >
                Add Product
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
