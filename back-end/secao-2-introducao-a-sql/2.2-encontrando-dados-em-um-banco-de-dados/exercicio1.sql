-- tarefa 1
SELECT 'This is SQL Exercise, Practice and Solution';

-- tarefa 2
SELECT 1, 2, 3;
SELECT 1 AS 'Coluna 1', 2 AS 'Coluna 2', 3 AS 'Coluna 3';

-- tarefa 3
SELECT 10 + 15;

-- tarefa 4
SELECT 10 * 10;

-- tarefa 5
SELECT * FROM Scientists.Scientists;

-- tarefa 6
SELECT Name AS 'Nome do Projeto', Hours AS 'Tempo de Trabalho' FROM Scientists.Projects;

-- tarefa 7
SELECT * FROM Scientists.Scientists
ORDER BY Name;

-- tarefa 8
SELECT Name FROM Scientists.Projects
ORDER BY Name DESC;

-- tarefa 9
SELECT CONCAT('O projeto ', Name, ' precisou de ', Hours, ' horas para ser concluído.') AS 'Hours per Project' FROM Scientists.Projects;

-- tarefa 10
SELECT Name, Hours FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 3;

-- tarefa 11
SELECT DISTINCT Project FROM Scientists.AssignedTo;

-- tarefa 12
SELECT Name FROM Scientists.Projects
ORDER BY Hours DESC
LIMIT 1;

-- tarefa 13
SELECT Name FROM Scientists.Projects
ORDER BY Hours
LIMIT 1 OFFSET 1;

-- tarefa 14
SELECT * FROM Scientists.Projects
ORDER BY Hours
LIMIT 5;

-- tarefa 15
SELECT CONCAT('Existem ', COUNT(SSN), ' cientistas na tabela Scientists.') AS 'Number of Scientists' FROM Scientists.Scientists;