import { Link } from 'react-router'
import { TaskCard } from '../components/TaskCard'
import type { Task, TaskStatus} from '../types/task'
import { useState } from 'react'
import { useTags } from '../hooks/useTags'
type TasksPageProps = { tasks: Task[] }

export function TasksPage({ tasks }: TasksPageProps) {
 const [status, setStatus] = useState<TaskStatus | 'all'>('all')
 const { load } = useTags()
 const tagNames = new Map(
 load.status === 'success' ? load.data.map((tag) => [tag.id, tag.name]) : []
 )

 const visibleTasks = tasks.filter((task) =>
 status === 'all' || task.status === status
 )
 return (
 <section>
 <h1>Мои задачи</h1>
 <Link to="/tasks/new">Добавить задачу</Link>
 {tasks.length === 0 ? (
 <p>Задач пока нет.</p>
 ) : (
 <div className="task-list">
    <select value={status} onChange={(e) => {
 const value = e.target.value
 if (value === 'all' || value === 'В планах' || value === 'В процессе' || value === 'Завершено') {
 setStatus(value)
 }
}}>
 <option value="all">Все</option>
 <option value="В планах">В планах</option>
 <option value="В процессе">В процессе</option>
 <option value="Завершено">Завершено</option>
</select>
<button type="button" onClick={() => setStatus('all')}>Сбросить фильтр</button>
 {visibleTasks.length === 0 && <p>Нет задач с выбранным статусом.</p>}
 {visibleTasks.map((task) => (
 <TaskCard key={task.id} task={task} tagName={tagNames.get(task.tag)} />
 ))}
 </div>
 )}
 </section>
 )
}
