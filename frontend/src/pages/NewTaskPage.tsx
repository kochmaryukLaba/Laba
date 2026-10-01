import { Link } from 'react-router'

export function NewTaskPage() {
  return (
    <section>
      <h1>Создание задачи</h1>
      <p>йоу.</p>
      <Link to="/tasks">К списку задач</Link>
    </section>
  )
}