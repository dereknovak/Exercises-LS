SELECT name, string_agg(description, ', ') AS services
  FROM customers AS c
  LEFT OUTER JOIN customers_services AS cs
               ON customer_id = c.id
  LEFT OUTER JOIN services AS s
               ON service_id = s.id
 GROUP BY c.name;

-- Further Exploration

SELECT
       CASE
            WHEN name = lag(name) OVER (ORDER BY name)
                 THEN NULL
            ELSE name
       END,
       description
  FROM customers
  LEFT OUTER JOIN customers_services
               ON customer_id = customers.id
  LEFT OUTER JOIN services
               ON services.id = service_id;