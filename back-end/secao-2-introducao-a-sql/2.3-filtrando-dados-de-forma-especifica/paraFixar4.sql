-- tarefa 1
SELECT COUNT(*) AS payments_quantity FROM sakila.payment
WHERE DATE(payment_date) = '2005-05-25';

-- tarefa 2
SELECT COUNT(*) AS payments_quantity FROM sakila.payment
WHERE payment_date BETWEEN '2005-07-01 00:00:00' AND '2005-08-22 23:59:59';

-- tarefa 3
SELECT DATE(rental_date) AS `date`,
YEAR(rental_date) AS `year`,
MONTH(rental_date) AS `month`,
DAY(rental_date) AS `day`,
HOUR(rental_date) AS `hour`,
MINUTE(rental_date) AS `minute`,
SECOND(rental_date) AS `second`
FROM sakila.rental
WHERE rental_id = 10330;

-- tarefa 4
SELECT * FROM sakila.payment
WHERE DATE(payment_date) = '2005-07-28'
AND HOUR(payment_date) >= 22;