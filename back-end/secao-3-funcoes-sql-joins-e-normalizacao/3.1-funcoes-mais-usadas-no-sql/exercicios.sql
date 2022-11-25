-- tarefa 1
SELECT MAX(salary) FROM hr.employees;

-- tarefa 2
SELECT MAX(salary) - MIN(salary) FROM hr.employees;

-- tarefa 3
SELECT job_id, AVG(salary) AS average_salary FROM hr.employees
GROUP BY job_id
ORDER BY average_salary DESC;

-- tarefa 4
SELECT SUM(salary) AS total FROM hr.employees;

-- tarefa 5
SELECT ROUND(MAX(salary), 2) AS highest_salary,
       ROUND(MIN(salary), 2) AS lowest_salary,
       ROUND(SUM(salary), 2) AS total_salary,
       ROUND(AVG(salary), 2) AS average_salary
FROM hr.employees;

-- tarefa 6
SELECT job_id, COUNT(*) FROM hr.employees
WHERE job_id = 'IT_PROG';

-- tarefa 7
SELECT job_id, SUM(salary) AS total_sal_per_job FROM hr.employees
GROUP BY job_id;

-- tarefa 8
SELECT job_id, SUM(salary) AS total_salary FROM hr.employees
GROUP BY job_id
HAVING job_id = 'IT_PROG';

-- tarefa 9
SELECT job_id, SUM(salary) AS average_sal_per_job FROM hr.employees
GROUP BY job_id
HAVING job_id <> 'IT_PROG'
ORDER BY average_sal_per_job DESC;

-- tarefa 10
SELECT department_id,
       AVG(salary) AS average_salary,
       COUNT(*) AS employees
FROM hr.employees
GROUP BY department_id
HAVING employees > 10;

-- tarefa 11
SELECT REPLACE(phone_number, 515, 777) FROM hr.employees;

-- tarefa 12
SELECT * FROM hr.employees
WHERE CHAR_LENGTH(first_name) >= 8;

-- tarefa 13
SELECT employee_id, first_name, YEAR(hire_date) AS hire_year FROM hr.employees;

-- tarefa 14
SELECT employee_id, first_name, DAY(hire_date) AS hire_day FROM hr.employees;

-- tarefa 15
SELECT employee_id, first_name, MONTH(hire_date) AS hire_month FROM hr.employees;

-- tarefa 16
SELECT UCASE(first_name) AS first_name, UCASE(last_name) AS last_name FROM hr.employees;

-- tarefa 17
SELECT last_name, hire_date FROM hr.employees
WHERE MONTH(hire_date) = 7 AND YEAR(hire_date) = 1987;

-- tarefa 18
SELECT first_name, last_name, DATEDIFF(CURRENT_DATE(), hire_date) AS days_worked FROM hr.employees;