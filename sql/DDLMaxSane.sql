CREATE SCHEMA IF NOT EXISTS mydb;
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS mydb."users" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_name" VARCHAR(255) NOT NULL,
  "role" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "cpf" VARCHAR(255) NOT NULL,
  "phonenumber" VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS mydb."product" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "product_name" VARCHAR(255) NOT NULL,
  "image" VARCHAR(255) NOT NULL,
  "category" VARCHAR(255) NOT NULL,
  "description" VARCHAR(255) NOT NULL,
  "use_case" INT NOT NULL
);

CREATE TABLE IF NOT EXISTS mydb."pedido" (
    id SERIAL PRIMARY KEY,
    product_id UUID,
    quantidade INT,
    data_pedido DATE,
    user_id UUID,
    FOREIGN KEY (product_id) REFERENCES mydb."product"("id"),
    FOREIGN KEY (user_id) REFERENCES mydb."users"("id")
);

CREATE TABLE IF NOT EXISTS mydb."logs" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "data_log" VARCHAR(255) NOT NULL,
  "log" jsonb NOT NULL
);

CREATE OR REPLACE FUNCTION relatorio_pedidos()
RETURNS TABLE (
    product_id UUID,
    product_name VARCHAR(100),
    total_vendas DECIMAL(10, 2),
    quantidade_pedidos INT
) AS
$$
BEGIN
    RETURN QUERY
    SELECT 
        p.id AS product_id,
        p.product_name,
        SUM(p.preco * pe.quantidade) AS total_vendas,
        COUNT(pe.id) AS quantidade_pedidos
    FROM 
        mydb."product" p
    LEFT JOIN 
        mydb."pedido" pe ON p.id = pe.product_id
    GROUP BY 
        p.id, p.product_name;
END;
$$
LANGUAGE 'plpgsql';

CREATE OR REPLACE FUNCTION relatorio_estoque()
RETURNS TABLE (
    product_id UUID,
    product_name VARCHAR(100),
    quantidade_estoque INT
) AS
$$
BEGIN
    RETURN QUERY
    SELECT 
        id AS product_id,
        product_name,
        estoque AS quantidade_estoque
    FROM 
        mydb."product";
END;
$$
LANGUAGE 'plpgsql';

CREATE OR REPLACE VIEW mydb.view1 AS SELECT 1 AS id;

