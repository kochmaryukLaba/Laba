export type TaskStatus = 'В планах' | 'В процессе' | 'Завершено'
export type Task = {
 id: string
 title: string
 description: string
 status: TaskStatus
 dueDate: string
 priority: 'не горит' | 'средний' | 'горит'
 tag: string
}
