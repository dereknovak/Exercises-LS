SELECT MAX(count) FROM (
       SELECT COUNT(bidder_id) FROM bids
       GROUP BY bidder_id
);