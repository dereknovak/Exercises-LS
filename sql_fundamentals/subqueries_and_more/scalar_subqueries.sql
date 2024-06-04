SELECT name, (
       SELECT COUNT(item_id) FROM bids
        WHERE items.id = item_id
       )
  FROM items;

/*
A scalar subqueries utilizes a subquery within the `SELECT` portion of the
query. This allows parts of the outer query to be used within the inner
subquery. It's important that this query only returns a single row/column.

In this example, the subquery uses the current value of `item.id` to count
the amount of times it appears in the `bids` relation. Because the outer query
is returning a row for every `name`, no `GROUP BY` is required, as each row 
will contain its respective count from the subquery.
*/

-- Further Exploration

SELECT name, COUNT(item_id)
  FROM items
  LEFT OUTER JOIN bids
               ON items.id = item_id
 GROUP BY items.id
 ORDER BY items.id;