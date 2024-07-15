import TodoList from '@/components/TodoList'
import prisma from '@/utils/db'

const getTodos = async () => {
    const response = await prisma.todo.findMany()
    return response
}
const TodoPage = async () => {
    const todos = await getTodos()
    return (
        <div>
            <TodoList todos={todos} />
        </div>
    )
}
export default TodoPage
