import TodoItem from "../TodoItem"
import styles from "./todoList.module.css"

export default function TodoList() {
    return (
        <div>
            <h1>
                To Do List
            </h1>

            <table className={styles.table}>
                <tr>
                    <th>ID</th>
                    <th>Tarefa</th>
                    <th>Data de Conclusão</th>
                </tr>

                <TodoItem id={1} tarefa = "Fazer TP de Fundamentos de React" data="16/09/2024"/>
                <TodoItem id={2} tarefa = "Fazer TP de Mobile First" data="16/09/2024"/>
                <TodoItem id={3} tarefa = "Fazer TP de Projeto de Bloco" data="16/09/2024"/>
            </table>
            
        </div>
    )
}