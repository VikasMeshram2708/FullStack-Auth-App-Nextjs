import { getDataFromToken } from "@/helpers/getDataFromToken";

import { NextRequest, NextResponse } from "next/server";

import { User } from "../login/route";

import { ObjectId } from "mongodb";


export async function GET(request: NextRequest) {
    try {
        const userId = await getDataFromToken(request);
        console.log('userId', userId);

        // Convert teh UserId to ObjectId
        const objectIdUserId = new ObjectId(userId);

        // using findOne 
        const user = await User.findOne({
            _id: objectIdUserId
        });

        console.log('logged user', user);

        return NextResponse.json({
            message: "User Found...",
            data: user,
        })
    } catch (error) {
        const errorMessage = error as Error;
        return NextResponse.json({
            message: errorMessage.message
        })
    }
}