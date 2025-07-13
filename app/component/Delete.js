"use client";
import { NextResponse } from "next/server";
import { use } from "react";
import React from "react";
import { useRouter } from "next/navigation";

const Delete = (props) => {
  const router = useRouter();
  const productId = props.id;
  //Delete API
  const deleteProduct = async () => {
    try {
      let result = await fetch(
        `http://localhost:3000/api/products/${productId}`,
        {
          method: "DELETE",
        }
      );
      result = await result.json();
      if (result.success) {
        alert("Product Deleted");
        router.refresh();
      } else {
        alert("Something went wrong");
      }
    } catch (err) {
      console.log("error:", err);
    }
  };
  return (
    <button
      href={`products/`}
      onClick={deleteProduct}
      className="text-black cursor-pointer  bg-red-700 hover:bg-red-600 hover:text-white font-medium rounded-lg text-sm px-5 py-2.5"
    >
      Delete
    </button>
  );
};

export default Delete;
