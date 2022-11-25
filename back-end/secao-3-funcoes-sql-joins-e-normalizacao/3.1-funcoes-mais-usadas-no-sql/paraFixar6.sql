-- tarefa 1
SELECT rating, AVG(length) AS average_length
FROM sakila.film
GROUP BY rating
HAVING average_length BETWEEN 115.0 AND 121.50
ORDER BY average_length DESC;

-- tarefa 2
SELECT rating, SUM(replacement_cost) AS total_replacement_cost
FROM sakila.film
GROUP by rating
HAVING total_replacement_cost > 3950.50
ORDER BY total_replacement_cost;