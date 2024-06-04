SELECT description, COUNT(service_id) AS count
  FROM services
  LEFT JOIN customers_services
         ON service_id = services.id
 GROUP BY description
HAVING COUNT(customer_id) >= 3;