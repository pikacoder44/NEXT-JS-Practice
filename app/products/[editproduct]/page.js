"use client";
import React, { useState, useEffect, use } from "react";
import Link from "next/link";
const Page = ({ params }) => {
  // let temp = use(params);
  // console.log(temp.editproduct);

  const parameter = use(params);
  const productId = parameter.editproduct;
  console.log(productId);

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [company, setCompany] = useState("");
  const [color, setColor] = useState("");
  const [category, setCategory] = useState("");

  // API Call to get data:

  useEffect(() => {
    getProductDetails();
  }, []);
  const getProductDetails = async () => {
    try {
      let data = await fetch(`http://localhost:3000/api/products/${productId}`);
      data = await data.json();
      console.log(data);

      // Use nullish coalescing to prevent undefined issues
      setName(data.result.name ?? "");
      setPrice(data.result.price ?? "");
      setCompany(data.result.company ?? "");
      setColor(data.result.color ?? "");
      setCategory(data.result.category ?? "");
    } catch (error) {
      console.error("Failed to fetch product", error);
    }
  };

  // Update Product Data:
  const updateProduct = async () => {
    let result = await fetch(
      `http://localhost:3000/api/products/${productId}`,
      {
        method: "PUT",
        body: JSON.stringify({ name, price, company, color, category }),
      }
    );
    result = await result.json();
    console.log(result);

    if (result.success == true) {
      alert("Product Updated Successfully");
    } else {
      alert("Invalid parameters");
    }
  };

  const clearInput = async () => {
    setName("");
    setPrice("");
    setCompany("");
    setColor("");
    setCategory("");
  };

  return (
    <div className=" flex justify-center items-center flex-col  ">
      <h1 className="text-7xl  mb-2 text-secondary font-bold  hover:text-secondary hover:cursor-default">
        Edit Product
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
            className="m-6 p-2 text-center  content-center block  "
            type="text"
            placeholder="Enter Category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
                onClick={updateProduct}
                className="bg-secondary p-2 mt-5 mb-5 rounded-md hover:cursor-pointer hover:bg-orange-500 hover:text-black  "
              >
                Submit
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
