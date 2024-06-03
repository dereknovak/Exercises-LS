SELECT name, COUNT(device_id)
  FROM devices
  JOIN parts ON devices.id = parts.device_id
 GROUP BY name
 ORDER BY name DESC;