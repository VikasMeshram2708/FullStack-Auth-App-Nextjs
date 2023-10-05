import { NextRequest, NextResponse } from "next/server";
import { db } from "@/dbConfig/dbConfig";
const User = db.collection("users");
import bcryptjs from "bcryptjs";
import * as jwt from "jsonwebtoken";

export async function GET() {
  return NextResponse.json({
    message: "Welcome to Login....",
  });
}

export async function POST(request: NextRequest) {
  try {
    const reqBody = await request.json();
    const { email, password } = reqBody;
    console.log(reqBody);

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        {
          message: "User not found",
        },
        {
          status: 400,
        }
      );
    }

    // check if the password is correct
    const validatePassword = await bcryptjs.compare(password, user.password);

    if (!validatePassword) {
      return NextResponse.json(
        {
          message: "Invalid password",
        },
        {
          status: 400,
        }
      );
    }

    // create token data
    const tokenData = {
      id: user._id,
      username: user.username,
      email: user.email,
    };

    // create token
    const token = await jwt.sign(tokenData, process.env.TokenSecret!, {
      expiresIn: "1h",
    });

    const respnose = NextResponse.json({
      message: "Login successful",
      success: true,
    });

    // setting the cookies
    respnose.cookies.set('token',token,{
        httpOnly: true,
    })

    return respnose;
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
