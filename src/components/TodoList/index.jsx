import TodoItem from "../TodoItem"
import styles from "./todoList.module.css"

export default function TodoList() {

    const tasks = [
        'Lavar a bike',
        'Estudar React',
        'Fazer exercícios'
    ];

    return (
        <div>
            <h1>
                To Do List
            </h1>

            <ul>
                {tasks.map((task, index) => (
                    <TodoItem key={index} task={task} />
                ))}
            </ul>

        </div>
    )
}