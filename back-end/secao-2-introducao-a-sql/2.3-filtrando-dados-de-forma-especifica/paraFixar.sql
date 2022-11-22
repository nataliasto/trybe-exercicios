-- tarefa 1
SELECT * FROM sakila.customer
WHERE email = 'LEONARD.SCHOFIELD@sakilacustomer.org';

-- tarefa 2
SELECT CONCAT(first_name, ' ', last_name) AS name FROM sakila.customer
WHERE active IS FALSE
AND store_id = 2
AND first_name <> 'KENNETH'
ORDER BY first_name;

-- tarefa 3
SELECT title, description, release_year, rating, replacement_cost FROM sakila.film
WHERE rating = 'G' OR rating = 'PG' OR rating = 'PG-13'
AND replacement_cost >= 18
ORDER BY replacement_cost DESC, title
LIMIT 100;

-- tarefa 4
SELECT COUNT(first_name) FROM sakila.customer
WHERE store_id = 1
AND active IS TRUE;

-- tarefa 5
SELECT * FROM sakila.customer
WHERE store_id = 1
AND active IS FALSE;

-- tarefa 6
SELECT title FROM sakila.film
WHERE rating = 'NC-17'
ORDER BY rental_rate, title
LIMIT 50;