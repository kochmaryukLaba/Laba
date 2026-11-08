-- ЛР 5. Схема Task Tracker: публичный справочник тегов и личные задачи.
-- Применяется один раз в SQL Editor, затем выполняется supabase/seed.sql.

create table public.tags (
  id text primary key,
  name text not null unique,
  constraint tags_id_not_blank
    check (id = btrim(id) and id <> ''),
  constraint tags_name_not_blank
    check (name = btrim(name) and name <> '')
);

create table public.tasks (
  id uuid primary key default gen_random_uuid(),
  owner_id uuid not null references auth.users(id) on delete cascade,
  tag_id text not null references public.tags(id)
    on update cascade on delete restrict,
  title text not null,
  description text not null default '',
  status text not null,
  due_date date not null,
  priority text not null,
  created_at timestamptz not null default now(),
  constraint tasks_title_length
    check (char_length(btrim(title)) between 3 and 100),
  constraint tasks_status_allowed
    check (status in ('В планах', 'В процессе', 'Завершено')),
  constraint tasks_priority_allowed
    check (priority in ('не горит', 'средний', 'горит'))
);

-- Доступ: RLS на обеих таблицах, клиентским ролям — только чтение справочника.
alter table public.tags enable row level security;
alter table public.tasks enable row level security;

revoke all on table public.tags from anon, authenticated;
revoke all on table public.tasks from anon, authenticated;

grant select on table public.tags to anon, authenticated;

create policy "tags are publicly readable"
on public.tags
for select
to anon, authenticated
using (true);

-- У public.tasks в ЛР 5 нет клиентских прав и политик: личные строки закрыты до ЛР 6.
