import { Link, useNavigate, useParams } from 'react-router'
import type { Task } from '../types/task'
type TaskDetailsPageProps = {
  tasks: Task[]
  onDelete: (id: string) => void
}

export function TaskDetailsPage({ tasks, onDelete }: TaskDetailsPageProps) {
const { id } = useParams()
 const task = tasks.find((item) => item.id === id)
 const navigate = useNavigate()
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
 <Link to={`/tasks/${task.id}/edit`}>Редактировать</Link>
  <button type="button" onClick={() => {
 if (window.confirm(`Удалить задачу «${task.title}»?`)) {
 onDelete(task.id)
 navigate('/tasks', { replace: true })
 }
 }}>
 Удалить
 </button>
 </section>
 )
}
