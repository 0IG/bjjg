-- SETUP A BLUE PRINT FOR DATABASE

DROP DATABASE IF EXISTS bjjg;

-- CREATING THE DATABASE
CREATE DATABASE bjjg; 

-- CONNECTING TO THE DATABASE
\c ; -- db pg connect 


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
