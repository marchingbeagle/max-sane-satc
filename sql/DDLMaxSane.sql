CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE IF NOT EXISTS "users" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "user_name" VARCHAR(255) NOT NULL,
  "role" VARCHAR(255) NOT NULL,
  "password" VARCHAR(255) NOT NULL,
  "email" VARCHAR(255) NOT NULL,
  "cpf" VARCHAR(255) NOT NULL,
  "phonenumber" VARCHAR(255) NOT NULL
);

CREATE TABLE IF NOT EXISTS "product" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "product_name" VARCHAR(255) NOT NULL,
  "image" VARCHAR(255) NOT NULL,
  "category" VARCHAR(255) NOT NULL,
  "description" VARCHAR(255) NOT NULL,
  "use_case" INT NOT NULL
);

CREATE TABLE IF NOT EXISTS "logs" (
  "id" UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
  "data_log" VARCHAR(255) NOT NULL,
  "log" jsonb NOT NULL
);

CREATE OR REPLACE VIEW view1 AS SELECT 1 AS id;
