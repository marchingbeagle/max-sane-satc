INSERT INTO "users" ("user_name", "role", "password", "email", "cpf", "phonenumber") VALUES
('Eduarda Santos', 'Gerente de Vendas', 'senhasegura1', 'eduarda@example.com', '123.456.789-10', '(11) 98765-4321'),
('Marcos Silva', 'Representante de Vendas', 'senhasegura2', 'marcos@example.com', '987.654.321-10', '(22) 12345-6789'),
('Larissa Oliveira', 'Comprador', 'senhasegura3', 'larissa@example.com', '456.789.123-10', '(33) 54321-9876');

INSERT INTO "product" ("product_name", "image", "category", "description", "use_case") VALUES
('Detergente', 'detergente.jpg', 'Limpeza', 'Produto para limpeza de utensílios domésticos', 1),
('Desinfetante', 'desinfetante.jpg', 'Higiene', 'Produto para desinfetar superfícies', 2),
('Sabão em Pó', 'sabao_em_po.jpg', 'Limpeza', 'Produto para lavagem de roupas', 3);

INSERT INTO "logs" ("data_log", "log")  VALUES 
('2024-04-26 10:00:00', '{"message": "Primeiro log", "level": "info"}'),
('2024-04-26 11:30:00', '{"message": "Segundo log", "level": "warning"}'),
('2024-04-26 14:45:00', '{"message": "Terceiro log", "level": "error"}');
