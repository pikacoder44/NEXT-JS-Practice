import { user } from "@/app/util/db";
import { NextResponse } from "next/server";
export async function GET(request, { params }) {
  const { id } = await params;

  const userData = user.filter((item) => item.id == id);
  return NextResponse.json(
    userData.length == 0
      ? { result: "No Data Found", status: 404 }
      : userData[0],
    { status: 200 }
  );
}

// PUT method for update:
export async function PUT(request, context) {
  let payload = await request.json();
  payload.id = context.params.id;

  console.log(payload);

  if (!payload.id | !payload.name | !payload.age | !payload.city) {
    return NextResponse.json(
      { error: "Invalid parameters", success: false },
      { status: 400 }
    );
  } else if (
    (payload.name == "") |
    (payload.age == "") |
    (payload.city == "")
  ) {
    return NextResponse.json(
      { result: "Parameters can't be empty", success: false },
      { status: 400 }
    );
  } else {
    return NextResponse.json(
      { result: payload, success: true },
      { status: 200 }
    );
  }
}

export function DELETE(request, content) {
  let id = content.params.id;
  console.log(id);

  if (id) {
    return NextResponse.json(
      { result: "User Deleted", success: true },
      { status: 200 }
    );
  } else {
    return NextResponse.json(
      { result: "Something went wrong", success: false },
      { status: 400 }
    );
  }
}
