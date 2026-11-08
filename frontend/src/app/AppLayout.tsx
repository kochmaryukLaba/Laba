import { NavLink, Outlet } from 'react-router'
export function AppLayout() {
 return (
 <div className="app">
 <header>
 <p className="app-title">ДневничЁк</p>
 <nav aria-label="Основная навигация">
 <NavLink to="/tasks" end>Задачи</NavLink>
 <NavLink to="/tasks/new">Создать</NavLink>
 </nav>
 <p className="storage-note">Изменения задач временные: они хранятся только в открытом приложении и после обновления страницы сбрасываются к демонстрационному набору.</p>
 </header>
 <main><Outlet /></main>
 </div>
 )
}
