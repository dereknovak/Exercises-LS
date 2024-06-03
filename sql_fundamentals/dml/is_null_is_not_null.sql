-- Belongs to a device

SELECT part_number, device_id
  FROM parts
 WHERE device_id IS NOT NULL;

-- Doesn't belong to a device

SELECT part_number, device_id
  FROM parts
 WHERE device_id IS NULL;