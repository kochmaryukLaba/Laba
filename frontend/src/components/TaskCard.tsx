import { Link } from 'react-router'
import type { Task } from '../types/task'
type TaskCardProps = { task: Task; tagName?: string }
export function TaskCard({ task, tagName }: TaskCardProps) {
 return (
 <article className="task-card">
 <h2>
 <Link to={`/tasks/${task.id}`}>{task.title}</Link>
 </h2>
 <p>{task.description}</p>
 <p>Срок: {task.dueDate}</p>
 <p>{task.status} · {task.priority}</p>
 <p>Тег: {tagName ?? task.tag}</p>
 </article>
 )
}
