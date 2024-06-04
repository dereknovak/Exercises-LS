SELECT id FROM items
WHERE ROW ('Painting', 100.00, 250.00) = 
      ROW (name, initial_price, sales_price);

/*
This example restricts the use of `AND`. A good workaround is to use `ROW`
by specifying the values and column names. The actually syntax of `ROW` is
not required.
*/