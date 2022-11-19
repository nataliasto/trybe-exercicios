USE PiecesProviders;

-- tarefa 1
SELECT Piece, Price FROM Provides
WHERE Provider = 'RBT';

-- tarefa 2
SELECT * FROM Provides
ORDER BY Price DESC
LIMIT 5;

-- tarefa 3
SELECT Provider, Price FROM Provides
ORDER BY Price DESC
LIMIT 4 OFFSET 2;

-- tarefa 4
SELECT * FROM Provides
WHERE Provider = 'HAL'
ORDER BY Price DESC;

-- tarefa 5
SELECT COUNT(Provider) FROM Provides
WHERE Piece = 1;