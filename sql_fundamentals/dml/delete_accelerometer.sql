DELETE FROM parts
 WHERE device_id = 1;

DELETE FROM devices
 WHERE name = 'Accelerometer';

-- Further Exploration

/*
You can automatically delete the part with the deletion of the device by linking
them together via `ON DELETE CASCADE`.
*/

CREATE TABLE parts (
  ...
  device_id int REFERENCES devices (id) ON DELETE CASCADE
);

/*
If this was not previously added, it can be added by first removing the foreign
key constraint, then readding it with `ON DELETE CASCADE`.
*/

ALTER TABLE parts
 DROP CONSTRAINT parts_device_id_fkey,
  ADD FOREIGN KEY (device_id) REFERENCES device (id) ON DELETE CASCADE;

/*
Then, simply deleting the device will automatically delete the parts that
are associated with it.
*/

DELETE FROM devices
 WHERE name = 'Accelerometer';