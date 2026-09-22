CREATE TABLE categories (
  category_id integer GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  category_name text
);

INSERT INTO categories (category_name) VALUES 
('Electronics'),
('Furniture'),
('Stationery'),
('Books'),
('Toys');

-- INSERT INTO categories (category_id, category_name) VALUES 
-- (600, 'temp_cat');

-- SELECT * FROM categories;

-- DELETE FROM categories WHERE category_name='temp_cat';

-- SELECT * FROM categories;


INSERT INTO categories(category_name) VALUES 
('Food');