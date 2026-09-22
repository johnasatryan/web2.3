-- CREATE TABLE products (
--   product_id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   product_name text NOT NULL,
--   price numeric(8, 2) NOT NULL CHECK(price > 0),
--   category_id integer,
--   stock_quantity integer NOT NULL DEFAULT 0
-- );

-- CREATE TABLE orders (
--   order_id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
--   product_id integer,
--   quantity integer NOT NULL CHECK (quantity > 0),
--   order_date date NOT NULL DEFAULT (now())
-- );

-- INSERT INTO products (product_name, price, category_id, stock_quantity) VALUES
-- ('Wireless Mouse', 19.99, 1, 150),
-- ('Mechanical Keyboard', 49.99, 1, 80),
-- ('Standing Desk', 249.00, 2, 30),
-- ('Office Chair', 129.50, 2, 45),
-- ('Notebook Pack', 4.99, 3, 300),
-- ('Gel Pens (12-pack)', 6.50, 3, 220),
-- ('PostgreSQL Handbook', 39.00, 4, 60),
-- ('SQL Cookbook', 34.00, 4, 40),
-- ('Building Blocks', 24.99, 5, 60),
-- ('Desk Lamp', 15.50, NULL, 0);


-- SELECT products.product_name, products.price, 
-- products.stock_quantity, categories.category_name 
-- FROM products INNER JOIN categories ON products.category_id = categories.category_id;

-- SELECT p.product_name, p.price, c.category_name 
-- FROM products AS p
-- LEFT JOIN categories AS c 
-- ON p.category_id=c.category_id;


-- SELECT p.product_name, p.price, c.category_name 
-- FROM products AS p
-- RIGHT JOIN categories AS c 
-- ON p.category_id=c.category_id;


-- SELECT p.product_name, c.category_name 
-- FROM categories AS c
-- FULL JOIN products AS p 
-- ON c.category_id=p.category_id;
-- INSERT INTO products (product_name, price, category_id, stock_quantity) VALUES
-- ('NAN', 19.99, 145, 150);

-- SELECT p.product_name, p.price, c.category_name 
-- FROM products AS p
-- JOIN categories AS c 
-- ON p.category_id = c.category_id;


ALTER TABLE products ADD CONSTRAINT
products_category_id_fkey FOREIGN KEY(category_id)
REFERENCES categories(category_id);