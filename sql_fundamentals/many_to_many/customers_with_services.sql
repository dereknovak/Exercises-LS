SELECT customers.* FROM customers
  JOIN customers_services
    ON customers.id = customers_services.customer_id
 GROUP BY customers.id
 ORDER BY customers.id;
