'use server'
import { revalidatePath } from 'next/cache'
import db from './db'

export const createTodo = async (formData) => {
    const nextTodo = await db.todo.create({
        data: {
            Title: formData.get('title'),
            Content: formData.get('content')
        }
    })
    revalidatePath('/todos')
}

export const completeTodo = async (id) => {
    await db.todo.update({
        where: {
            TodoId: id
        },
        data: {
            Completed: true
        }
    })

    revalidatePath('/todos')
}
