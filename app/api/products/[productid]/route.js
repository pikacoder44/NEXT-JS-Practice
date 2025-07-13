import connString from "@/lib/db";
import { Product } from "@/lib/model/product";
import mongoose from "mongoose";
import { NextResponse } from "next/server";

export async function PUT(request, content) {
  const productId = await content.params.productid;

  const filter = { _id: productId };
  const payload = await request.json();

  // Conect MongoDB:
  await mongoose.connect(connString);
  const result = await Product.findOneAndUpdate(filter, payload);

  return NextResponse.json({ result, success: true });
}

export async function GET(request,content) {
  const productId = await content.params.productid;

  const id = { _id: productId };

  // Conect MongoDB:
  await mongoose.connect(connString);
  const result = await Product.findById(id);

  return NextResponse.json({ result, success: true });
}

export async function DELETE(request,content) {
  const productId = await content.params.productid;
  const id = { _id: productId };
  // Conect MongoDB:
  try {
    await mongoose.connect(connString);
    const result = await Product.findByIdAndDelete(id);
    return NextResponse.json({ result, success: true });
  } catch (err) {
    return NextResponse.json({ error: err, success: false });
  }
}
