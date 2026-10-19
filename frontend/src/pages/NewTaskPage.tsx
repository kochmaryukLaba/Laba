import { useNavigate } from 'react-router'
import type { TaskDraft } from '../types/task'
import { TaskForm } from '../components/TaskForm'

type NewTaskPageProps = {
 onCreate: (draft: TaskDraft) => string
}

const emptyTask: TaskDraft = {
 title: '', description: '', status: 'В планах',
 dueDate: '', priority: 'средний', tag: '',
}

export function NewTaskPage({ onCreate }: NewTaskPageProps) {
 const navigate = useNavigate()

 function handleSave(draft: TaskDraft) {
 const id = onCreate(draft)
 navigate(`/tasks/${id}`)
 }

 return (
 <section>
 <h1>Создание задачи</h1>
 <TaskForm initialValues={emptyTask} onSave={handleSave}
 onCancel={() => navigate('/tasks')} />
 </section>
 )
}