import mongoose from "mongoose";
import { NextResponse } from "next/server";
import connString from "@/lib/db";
import { Product } from "@/lib/model/product";
import {writeFile} from "fs/promises"
/*

    ------------------ MongoDB CRUD ------------------

*/

// Get Method:

export async function GET() {
  let data = [];
  try {
    await mongoose.connect(connString);
    data = await Product.find();
    console.log("Connection established");

    return NextResponse.json({ data: data });
  } catch (error) {
    console.log("Connection Failed");
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

// POST Method:
export async function POST(req) {

  try {
    let payload = await req.json();
    await mongoose.connect(connString);
    let product = new Product(payload);
    await product.save();
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ success: false, error: err }, { status: 400 });
  }
}
