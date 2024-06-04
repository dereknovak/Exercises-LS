EXPLAIN ANALYZE SELECT COUNT(bidder_id) AS max_bid FROM bids
  GROUP BY bidder_id
  ORDER BY max_bid DESC
  LIMIT 1;

EXPLAIN ANALYZE SELECT MAX(bid_counts.count) FROM (
        SELECT COUNT(bidder_id) FROM bids GROUP BY bidder_id
        ) AS bid_counts;

/*
There appears to be a reusage of operations for similar nodes, which always
speeds up the second query statement. Although the startup/total times are
roughly the same, as indicated by `EXPLAIN`, the planning and execution times
are drastically different, which the first being around 0.4 ms and the second
around 0.05 ms.
*/