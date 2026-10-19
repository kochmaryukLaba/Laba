export type TaskStatus = 'В планах' | 'В процессе' | 'Завершено'
export type TaskPriority = 'не горит' | 'средний' | 'горит'

export type Task = {
  id: string
  title: string
  description: string
  status: TaskStatus
  dueDate: string
  priority: TaskPriority
  tag: string
}

export type TaskDraft = Omit<Task, 'id'>