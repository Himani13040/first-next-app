import { NextResponse } from "next/server"

export const GET = async (request: Request) => {
    return NextResponse.json({message: 'whoa! I just created a server'})
}

export const POST = async (request: Request) => {
    const data = await request.json()
    return NextResponse.json({message: data})
}