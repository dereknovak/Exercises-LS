EXPLAIN SELECT name FROM bidders
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);

/*
Hash Join  (cost=33.38..66.47 rows=635 width=32)
  Hash Cond: (bidders.id = bids.bidder_id)
  ->  Seq Scan on bidders  (cost=0.00..22.70 rows=1270 width=36)
  ->  Hash  (cost=30.88..30.88 rows=200 width=4)
        ->  HashAggregate  (cost=28.88..30.88 rows=200 width=4)
              Group Key: bids.bidder_id
              ->  Seq Scan on bids  (cost=0.00..25.10 rows=1510 width=4)
*/

EXPLAIN ANALYZE SELECT name FROM bidders
WHERE EXISTS (SELECT 1 FROM bids WHERE bids.bidder_id = bidders.id);

/*
Hash Join  (cost=33.38..66.47 rows=635 width=32) (actual time=0.075..0.078 rows=6 loops=1)
  Hash Cond: (bidders.id = bids.bidder_id)
  ->  Seq Scan on bidders  (cost=0.00..22.70 rows=1270 width=36) (actual time=0.010..0.011 rows=7 loops=1)
  ->  Hash  (cost=30.88..30.88 rows=200 width=4) (actual time=0.041..0.041 rows=6 loops=1)
        Buckets: 1024  Batches: 1  Memory Usage: 9kB
        ->  HashAggregate  (cost=28.88..30.88 rows=200 width=4) (actual time=0.026..0.027 rows=6 loops=1)
              Group Key: bids.bidder_id
              Batches: 1  Memory Usage: 40kB
              ->  Seq Scan on bids  (cost=0.00..25.10 rows=1510 width=4) (actual time=0.007..0.011 rows=26 loops=1)
Planning Time: 0.892 ms
Execution Time: 0.175 ms
*/

/*
`ANALYZE` appears to provide the same information as `EXPLAIN` with the
addition of the actual times recorded when executing the query.
*/