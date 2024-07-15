import TodoForm from '@/components/TodoForm'

const Layout = ({ children }) => {
    return (
        <div className='max-w-lg mx-auto'>
            <TodoForm />
            {children}
        </div>
    )
}
export default Layout
