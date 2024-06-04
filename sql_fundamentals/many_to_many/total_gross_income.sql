SELECT SUM(price) AS gross
  FROM services
  JOIN customers_services
    ON service_id = services.id;