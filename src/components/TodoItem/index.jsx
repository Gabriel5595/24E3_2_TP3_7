import styles from "./todoItem.module.css"

export default function TodoItem(props) {
    return (
        <tr>
                <td className={styles.center}>{props.id}</td>
                <td>{props.tarefa}</td>
                <td>{props.data}</td>
        </tr>
    )
}