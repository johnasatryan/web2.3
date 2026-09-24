-- SELECT c.category_name, SUM(o.quantity * p.price) AS total_revenue
-- FROM products AS p 
-- JOIN orders AS o ON o.product_id = p.product_id
-- JOIN categories AS c ON p.category_id = c.category_id
-- GROUP BY c.category_name ORDER BY total_revenue;


SELECT p.product_name, p.product_id, COUNT(o.order_id)
FROM products AS p 
LEFT JOIN orders AS o ON p.product_id = o.product_id
GROUP BY p.product_name, p.product_id;