import { NextRequest, NextResponse } from "next/server";
import { db } from "@/dbConfig/dbConfig";
const User = db.collection("users");
import bcryptjs from "bcryptjs";

export async function GET() {
  return NextResponse.json({
    message: "Welcome....",
  });
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    console.log(reqBody);

    const { username, email, password } = reqBody;

    // check is user already exists
    const user = await User.findOne({ email });
    if (user) {
      return NextResponse.json(
        {
          message: "User already exists",
        },
        {
          status: 400,
        }
      );
    }

    // hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    const newuser = User.insertOne({
      username,
      email,
      password: hashedPassword,
    });

    return NextResponse.json(
      {
        message: "User created successfully",
        received: newuser,
      },
      {
        status: 201,
      }
    );
  } catch (error) {
    const errorMessage = error as Error;
    return NextResponse.json(
      {
        message: errorMessage.message,
      },
      {
        status: 500,
      }
    );
  }
}
