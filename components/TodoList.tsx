import React from 'react'
import TodoItem from './TodoItem'

export default function TodoList({ todos }) {

  if (!todos.length) {
    return <p>No records found</p>
  }
    return (
        <div>
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} />
            ))}
        </div>
    )
}
