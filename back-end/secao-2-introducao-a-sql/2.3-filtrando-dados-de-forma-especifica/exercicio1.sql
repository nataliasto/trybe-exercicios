USE store;

-- tarefa 1
SELECT * FROM itens
WHERE name LIKE 'GR%';

-- tarefa 2
SELECT * FROM supplies
WHERE item_id = 2
ORDER BY supplier_id;

-- tarefa 3
SELECT item_id, price, supplier_id FROM supplies
WHERE supplier_id LIKE '%N%';

-- tarefa 4
SELECT * FROM suppliers
WHERE name LIKE '%LTDA%'
ORDER BY name DESC;

-- tarefa 5
SELECT COUNT(*) FROM suppliers
WHERE id LIKE '%F%';

-- tarefa 6
SELECT * FROM supplies
WHERE price BETWEEN 15 AND 40
ORDER BY price;

-- tarefa 7
SELECT COUNT(*) FROM sales
WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';