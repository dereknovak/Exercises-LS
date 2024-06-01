ALTER TABLE stars
ALTER COLUMN distance
 TYPE numeric;

/*
Changing the type will have no impact on the integers, as they will retain
the same syntax. If, however, you go the other director (float => int), then
PostgreSQL will round the value.
*/