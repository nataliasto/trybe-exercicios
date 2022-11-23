-- tarefa 1
SELECT * FROM sakila.film
WHERE title LIKE '%ace%';

-- tarefa 2
SELECT * FROM sakila.film
WHERE description LIKE '%china';

-- tarefa 3
SELECT * FROM sakila.film
WHERE description LIKE '%girl%'
AND title LIKE '%lord'
LIMIT 2;

-- tarefa 4
SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
LIMIT 2;

-- tarefa 5
SELECT * FROM sakila.film
WHERE title LIKE '___gon%'
AND description LIKE '%Documentary%'
LIMIT 1;

-- tarefa 6
SELECT * FROM sakila.film
WHERE title LIKE '%academy'
OR title LIKE 'mosquito%'
LIMIT 2;

-- tarefa 7
SELECT * FROM sakila.film
WHERE description LIKE '%monkey%'
AND description LIKE '%sumo%'
LIMIT 6;