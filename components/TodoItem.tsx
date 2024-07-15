'use client'
import { completeTodo } from '@/utils/actions'
import React, { useTransition } from 'react'

export default function TodoItem({ todo }) {
    const [isPending, startTransition] = useTransition()
    return (
        <article className="border-b border-b-gray-300 py-4 last:border-b-0">
            <div className="flex justify-between items-center">
                <h3 className="font-medium text-lg">{todo.Title}</h3>
                <p
                    className={
                        todo.Completed
                            ? 'text-green-500 bg-green-100 px-3 rounded-full'
                            : 'text-orange-500 bg-orange-50 px-2 rounded-full'
                    }
                >
                    {todo.Completed ? 'Done' : 'Pending'}
                </p>
            </div>
            <p className=" mb-4 text-xs text-gray-400">
                {todo.CreatedAt.toDateString()}
            </p>
            <div className="flex justify-between items-center">
                <p className="line-clamp-2 max-w-[30ch]">{todo.Content}</p>
                <button
                     disabled={todo.Completed}
                    onClick={() => startTransition(() => completeTodo(todo.TodoId))}
                    className={`border disabled:cursor-not-allowed border-blue-400 rounded-md py-2 px-4 text-sm text-blue-500 `}
                >
                    Set it done
                </button>
            </div>
        </article>
    )
}
