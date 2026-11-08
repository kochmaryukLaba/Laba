-- ЛР 5. Справочные данные (те же id, что в JSON ЛР 4).
insert into public.tags (id, name)
values
  ('study', 'Учёба'),
  ('work', 'Работа'),
  ('home', 'Дом'),
  ('health', 'Здоровье'),
  ('personal', 'Личное')
on conflict (id) do update
set name = excluded.name;
