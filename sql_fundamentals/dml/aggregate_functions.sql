SELECT name, COUNT(device_id)
  FROM devices
  LEFT OUTER JOIN parts ON devices.id = parts.device_id
 GROUP BY name;