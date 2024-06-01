ALTER TABLE stars
  ADD CHECK (spectral_type IN ('O', 'B', 'A', 'F', 'G', 'K', 'M')),
ALTER COLUMN spectral_type SET NOT NULL;

/*
Attempting to add a `NOT NULL` constraint to a table that has `NULL` values
will result in an error. To get around this, it's best to either establish
`NOT NULL` before adding data, or by adding all the correct data before
changing the schema.
*/