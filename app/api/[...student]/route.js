import { NextResponse } from "next/server";
import React from "react";

export async function GET(reqest, content) {
  const studentDetails = content.params.student;
  console.log(studentDetails);

  return NextResponse.json({
    result: studentDetails
  });
}
