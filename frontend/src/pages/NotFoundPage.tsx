import { Link } from 'react-router'

export function NotFoundPage() {
  return (
    <section>
      <h1>а такой странички, то нет</h1>
      <p>и даже такого адреса в приложении нет.</p>
      <Link to="/tasks">К списку задач</Link>
    </section>
  )
}