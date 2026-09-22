-- ALTER TABLE categories ALTER COLUMN category_name SET NOT NULL;
-- ALTER TABLE categories ADD CONSTRAINT chlp 
-- CHECK(char_length(category_name) >= 3);


-- ALTER TABLE categories ADD COLUMN descirption text;

-- ALTER TABLE categories ADD COLUMN is_active boolean NOT NULL DEFAULT(true);

INSERT INTO categories (category_name) VALUES
('TV');