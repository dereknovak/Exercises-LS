ALTER TABLE planets
  ADD COLUMN star_id int REFERENCES stars (id);