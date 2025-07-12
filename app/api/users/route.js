import { user } from "@/app/util/db";
import { NextResponse } from "next/server";

// Get Request func:
export async function GET() {
  const data = user;
  return NextResponse.json(data, { status: 200 });
}

// POST req func:

export async function POST(request) {
  let payload = await request.json();
  console.log(payload);

  if (!payload.name || !payload.age || !payload.city) {
    console.error("Missing Parameters");
    return NextResponse.json(
      { error: "Missing Parameters", success: false },
      { status: 500 }
    );
  }
  return NextResponse.json(
    { result: "new user created", success: true },
    { status: 201 }
  );
}

