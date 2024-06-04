SELECT name FROM bidders
 WHERE EXISTS (
       SELECT 1 FROM bids
       WHERE bidder_id = bidders.id
);

-- Further Exploration

SELECT name FROM bidders
  JOIN bids ON bidder_id = bidders.id
 GROUP BY bidders.id
 ORDER BY bidders.id;