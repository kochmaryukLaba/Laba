import { Link } from 'react-router'

export function NewTaskPage() {
  return (
    <section>
      <h1>Создание задачи</h1>
      <p>йоу, возвращайся позже</p>
      <Link to="/tasks">К списку задач</Link>
    </section>
  )
}