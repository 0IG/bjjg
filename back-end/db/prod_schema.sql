-- CONNECTING TO THE DATABASE
\c daevd1vmg0g7lm;

DROP DATABASE IF EXISTS recs;


-- CREATING THE SNACKS TABLE
CREATE TABLE recs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    price INT,
    rating INT,
    is_user_submitted BOOLEAN,
    is_expensive BOOLEAN,
    image TEXT NOT NULL,
    link TEXT NOT NULL
);
