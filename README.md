# Task Tracker

Учебный проект курса «React TypeScript Node и Supabase».

**Автор:** Артём, группа ФТ24ВР62ПИ1
**Тема:** Task Tracker — задачи, статусы, сроки и приоритеты.
**Сценарий:** пользователь добавляет задачу, указывает срок, меняет статус и находит просроченные записи.

## Стек
React + TypeScript + Vite (frontend), Supabase (PostgreSQL) — справочник тегов.

## Версия Node
v24.21.0

## Запуск
Из корня скачанного проекта:
\`\`\`bash
cd frontend
npm ci
npm run dev
\`\`\`

## Проверка сборки
Остановите dev через Ctrl+C. Выполните в frontend:
\`\`\`bash
npm run build
npm run preview
\`\`\`

## Текущее состояние
Список задач, просмотр, создание, редактирование, удаление и фильтр по статусу.

**Основные записи (задачи)** хранятся только в состоянии `App`: после перезагрузки страницы список возвращается к демонстрационному набору из `frontend/src/data/tasks.ts`.

**Справочник тегов** хранится в Supabase (таблица `public.tags`) и читается через общий клиент `frontend/src/lib/supabase.ts`, сервис `frontend/src/services/tags.ts` и хук `frontend/src/hooks/useTags.ts`. В задаче хранится id тега, в форме показывается его название. Браузер может только читать справочник; таблица личных задач `public.tasks` закрыта до ЛР 6.

## База данных
1. Создать проект Supabase.
2. В SQL Editor выполнить `supabase/migrations/202611081815_initial_schema.sql`, затем `supabase/seed.sql`.

## Переменные окружения
Скопировать `frontend/.env.example` в `frontend/.env.local` и указать значения своего проекта (Dashboard → Connect / Settings → API Keys):
- `VITE_SUPABASE_URL`
- `VITE_SUPABASE_PUBLISHABLE_KEY`

Только publishable key. Secret key, service_role и пароль базы во frontend и в репозиторий не помещаются. После изменения `.env.local` перезапустить `npm run dev`.
