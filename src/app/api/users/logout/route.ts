import { NextResponse } from "next/server";

export async function GET() {
  try {
    const response = NextResponse.json({
      message: "Logout Successfully...",
      success: true,
    });

    response.cookies.set("token", "", {
      httpOnly: true,
      expires: new Date(0), // expireis it right now
    });

    return response;
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
