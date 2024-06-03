UPDATE parts
   SET device_id = 1
 WHERE part_number = 37 OR part_number = 39;

-- Further Exploration

UPDATE parts
   SET device_id = 2
 WHERE part_number = (
       SELECT min(part_number)
          FROM parts
       );