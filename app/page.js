"use client";
import React, { useState } from "react";

import Image from "next/image";
const page = () => {
  const handleClick = async () => {
    let data = {
       name:"Hashir",
       role:"Coder"
    }
    let a = await fetch("/api/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    let resp = await a.json();
    console.log(resp);
  };

  return (
    <div>
      <h1 className="text-xl font-bold">NEXT.js Api Routes demo </h1>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default page;
