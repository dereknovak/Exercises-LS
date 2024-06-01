ALTER TABLE planets
  ADD COLUMN semi_major_axis numeric NOT NULL;

/*
Because we are adding a column with a `NOT NULL` constraint, we must fill in
all the data before running this code. This would mean adding the `NOT NULL`
constraint at a later time.
*/