'use client'
import { createTodo } from '@/utils/actions'
import React, { useState } from 'react'

export default function TodoForm() {
    const [title, setTitle] = useState('')

    return (
        <div className=" mt-8 text-center">
            <h1 className="text-2xl font-semibold">Create todo list</h1>
            <form action={createTodo} className="flex flex-col p-8">
                <input
                    className="border border-gray-300 rounded-md py-3 px-4 mb-6"
                    placeholder="Enter title"
                    type="text"
                    name="title"
                />
                <textarea
                    name="content"
                    className="border border-gray-300 rounded-md py-3 px-4"
                    placeholder="Enter description"
                ></textarea>
                <button
                    type="submit"
                    className="py-2 rounded-md font-semibold tracking-wide mt-6 bg-blue-400 text-white"
                >
                    Create todo
                </button>
            </form>
        </div>
    )
}
