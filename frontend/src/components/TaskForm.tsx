import { useState } from 'react'
import type { FormEvent } from 'react'
import type { TaskDraft } from '../types/task'

type TaskFormProps = {
  initialValues: TaskDraft
  onSave: (draft: TaskDraft) => void
  onCancel: () => void
}

export function TaskForm(props: TaskFormProps) {
  const [draft, setDraft] = useState(() => ({ ...props.initialValues }))
  const [error, setError] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const title = draft.title.trim()
    if (title.length < 3 || title.length > 100) {
      setError('Название должно содержать от 3 до 100 символов.')
      return
    }
    if (!draft.dueDate) {
      setError('Укажите срок задачи.')
      return
    }
    setError('')
    props.onSave({ ...draft, title })
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="task-title">Название</label>
      <input id="task-title" value={draft.title} required
        onChange={(e) => setDraft({ ...draft, title: e.target.value })}
      />

      <label htmlFor="task-description">Описание</label>
      <textarea id="task-description" value={draft.description}
        onChange={(e) => setDraft({ ...draft, description: e.target.value })}
      />

      <label htmlFor="task-date">Срок</label>
      <input id="task-date" type="date" value={draft.dueDate} required
        onChange={(e) => setDraft({ ...draft, dueDate: e.target.value })}
      />

      <label htmlFor="task-status">Статус</label>
      <select id="task-status" value={draft.status} onChange={(e) => {
        const status = e.target.value
        if (status === 'В планах' || status === 'В процессе' || status === 'Завершено') {
          setDraft({ ...draft, status })
        }
      }}>
        <option value="В планах">В планах</option>
        <option value="В процессе">В процессе</option>
        <option value="Завершено">Завершено</option>
      </select>

      <label htmlFor="task-priority">Приоритет</label>
      <select id="task-priority" value={draft.priority} onChange={(e) => {
        const priority = e.target.value
        if (priority === 'не горит' || priority === 'средний' || priority === 'горит') {
          setDraft({ ...draft, priority })
        }
      }}>
        <option value="не горит">не горит</option>
        <option value="средний">средний</option>
        <option value="горит">горит</option>
      </select>

      <label htmlFor="task-tag">Тег</label>
      <input id="task-tag" value={draft.tag}
        onChange={(e) => setDraft({ ...draft, tag: e.target.value })}
      />

      {error && <p role="alert">{error}</p>}
      <button type="submit">Сохранить</button>
      <button type="button" onClick={props.onCancel}>Отмена</button>
    </form>
  )
}