-- Initial Solution

SELECT * FROM customers
 WHERE id NOT IN (SELECT customer_id FROM customers_services);

/*
This solution works as it's whether a customer's `id` is present anywhere
within the `customers_services.customer_id` list. If included, the customer's
information will be added to the returned table.
*/

-- Provided Solution

SELECT customers.* FROM customers
  LEFT OUTER JOIN customers_services
    ON customer_id = customers.id
 WHERE service_id IS NULL;

/*
This solution creates a transient table that contains all values from the
`customers` table, and its corresponding values (including `NULL`) from 
the `customers_solutions` table, allowing for a check for `NULL`.
*/

-- Further Exploration

SELECT customers.*, services.*
  FROM customers
  LEFT OUTER JOIN customers_services AS cs
    ON customer_id = customers.id
  FULL OUTER JOIN services
    ON service_id = services.id
 WHERE cs.id IS NULL;