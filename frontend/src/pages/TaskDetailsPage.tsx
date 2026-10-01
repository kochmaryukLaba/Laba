import { Link, useParams } from 'react-router'
import { tasks } from '../data/tasks'
export function TaskDetailsPage() {
 const { id } = useParams()
 const task = tasks.find((item) => item.id === id)
 if (!task) {
 return (
 <section>
 <h1>Задача не найдена</h1>
 <Link to="/tasks">К списку задач</Link>
 </section>
 )
 }
 return (
 <section>
 <h1>{task.title}</h1>
 <p>{task.description}</p>
 <p>Срок: {task.dueDate}</p>
 <p>Статус: {task.status}</p>
 <p>Приоритет: {task.priority}</p>
 <Link to="/tasks">К списку задач</Link>
 </section>
 )
}
