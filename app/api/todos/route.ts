import db from '@/utils/db'
import { NextResponse } from 'next/server'

export const GET = async (reauest: Request) => {
 const todos = await db.todo.findMany()
 return NextResponse.json({data: todos})
}

export const POST = async (request: Request) => {
    const data = await request.json()
    const todo = await db.todo.create({
        data: {
            Title: data.title,
            Content: data.content
        }
    })
    return NextResponse.json({data: todo})
}