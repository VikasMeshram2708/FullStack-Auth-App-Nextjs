import { connectToDb } from "@/lib/DB";
import User from "@/models/User";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const reqBody = await request.json();
  const { name, email } = reqBody;

  await connectToDb();

  await User.create({ name, email });
  return NextResponse.json(
    {
      message: "User registered successfully.",
    },
    {
      status: 201,
    }
  );
}
