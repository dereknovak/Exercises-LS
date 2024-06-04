SELECT description FROM customers_services
 RIGHT OUTER JOIN services
    ON service_id = services.id
 WHERE customer_id IS NULL;