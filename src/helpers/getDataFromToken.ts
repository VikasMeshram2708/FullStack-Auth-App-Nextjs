import { NextRequest, NextResponse } from "next/server";
import * as jwt from "jsonwebtoken"

export async function getDataFromToken(request: NextRequest) {
    try {
        const token = request.cookies.get("token")?.value || '';
        const decodedToken:any = jwt.verify(token,process.env.TokenSecret!);
        return decodedToken.id;
    } catch (error) {
        const errorMessage = error as Error;
        return NextResponse.json({
            message: errorMessage.message
        })
    }
}