/*
The first request is asking for the expected sum of the current customer
service decisions. To calculate, simply create a transient table with the
current services purchased and find the sum.
*/

SELECT SUM(price)
  FROM services
  JOIN customers_services
    ON services.id = service_id
 WHERE price > 100;

/*
The second request asks for the potential if all customers purchased the
highest ticket services. For this, we can combine all possibilities of
`customers` and `services` using a `CROSS JOIN`, then add up the total.
*/

SELECT SUM(price)
  FROM customers
 CROSS JOIN services
 WHERE price > 100.00;

-- Further Exploration

/*
`CROSS JOIN`s are most useful when trying to discover every possible combination
of data, so anything that requires any kind of mixing will be relevant. This
can include ingredients for a recipe or clothes for an outfit.
*/
